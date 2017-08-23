let chai = require('chai');
let chaiHTTP = require('chai-http');
let server = require('../server/index.js');
let should = chai.should();
let expect = require('chai').expect;
let moment = require('moment');

chai.use(chaiHTTP);

describe('Spotify API', () => {
	describe('POST /songkick/', () => {
		it('it should send back a concert data', (done) => {
			let formattedDate = moment().format('YYYY-MM-DD');
			let data = {
	      date: formattedDate
	    };
			chai.request(server)
				.post('/songkick/')
				.send(data)
				.end((err, res) => {
					console.log(res.body);
					res.should.have.status(200);
					expect(res).to.have.headers;
					expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
					expect(res.body[0]).to.have.property('displayName');
					done();
				});
		 });
	});
});

//!!!!!!!!!! BEFORE TESING !!!!!!!!!!!!!!
// Need to fetch a new token manually from here https://developer.spotify.com/web-api/console/get-audio-features-track/
let token = 'BQDR1kJ7DfwhRY8IrznobmNqFUpny0_zUmzYN_eDyU_xZdodi7nAbX3BHYGxdKJn0bjJ-EIJUob5jiP2Gnju09iU8rolVAppAfeL5cfU4LprzMTC0eGNUqar97pB6319dsEJ0fTU52tRAHMwvoNmcSNJCVVFdfPbsesrHn3xauG9N5zwhcInBfWYdPVM4p5vLDN6luWVgdSA5DNhUSX-xpo4UgMLsPvWk57TFLuFlMkvdGEII593D809dhdgx1GVJyqC6mCfAeLoWyeLqKrM67PuYHTeZ1373Sx-nPFP50J40TRSeT6G3Ts24y6aMYZfcE9nGJPcfw';

describe('Spotify API', () => {
	beforeEach(() => {
		// Write script to get a token programmatically from spotify api
	});

	describe('GET /spotify/login', () => {
		it('it should send back a url to log in to Spotify, using client credentials', (done) => {
			chai.request(server)
				.get('/spotify/login')
				.end((err, res) => {
					res.should.have.status(200);
					expect(res).to.have.headers;
					expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
					res.text.should.equal('https://accounts.spotify.com/authorize?client_id=1b4dd6acf0c14120b5fa6ae37b4c773a&redirect_uri=http%3A%2F%2Flocalhost%3A1337%2Fspotify%2Fcallback%2F&scope=user-read-private%20user-read-email&response_type=token');
					done();
				});
		});
	});

	describe('POST /spotify/search', () => {
		it('it should send back an artistId', (done) => {
			// Requires a refreshed token. Refer to line 8.
			let data = {
				artist: 'Jimi Hendrix',
				token: token
			};

			chai.request(server)
				.post('/spotify/search')
				.send(data)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('artistId');
					res.body.artistId.should.equal('776Uo845nYHJpNaStv1Ds4');
					done();
				});
		});
	});

	describe('GET /spotify/callback', () => {
		it('it should redirect to localhost', (done) => {
			chai.request(server)
				.get('/spotify/callback')
				.end((err, res) => {
					res.should.redirectTo('http://localhost:1337/');
					done();
				});
		});
	});

});