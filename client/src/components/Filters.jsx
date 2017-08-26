import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Navbar, FormGroup, FormControl, Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import axios from 'axios';

// ignore the fact that this is called Favorites but the file is called Filters
class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      radius: 5,
      search: '',
      searchType: ''
    }
  }

  handleSearch(text) {
    this.setState({
      search: text.target.value
    });
  }

  // beginning of search functionality. we wanted to implement google search to be able to
  // autocomplete addresses but hey that's your job now
  handleSubmit() {    
    if (this.state.searchType === 'Artist') {
      console.log('This Artist');
      this.handleSend(this.state.search, 1)
    } else {
        var context = this;
        axios.post('/google/search', {
          loc: this.state.search
        })
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          this.props.handleMapChange(res.data[0].geometry.location);
          context.setState({
            search: ''
          });
        })
      }
    }
    
    handleSend(artist, page) {
      var params = {artist: artist, page: page}
      axios.post('/songkick/artist', params)
      .then((data) =>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  changeSearch(event) {
    this.setState({
      searchType: event
    })
    console.log(this.state.searchType)
  }
  
  searchdisplay(){
    
    if (this.state.searchType === 'Artist') {
      return (<div>Find an Artist!</div>)
    } else {
      const datepicker =  {
        paddingTop: '3.5px'
      }
      return ( 
        <div style={datepicker}>
        <DatePicker
        dateFormat="MM/DD/YYYY"
        selected={this.props.startDate}
        onChange={this.props.handleDateChange}
        /> </div>
      )
    }  
  }
  
  render() {
    
    return (
      <div>
        <Navbar bsStyle="info">
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search..." onChange={this.handleSearch.bind(this)}/>
            </FormGroup>
            {' '}
            <ButtonGroup>
              <Button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</Button>
              <DropdownButton title={this.state.searchType === '' ? "Dropdown" : this.state.searchType } id="bg-nested-dropdown">
                <MenuItem onSelect={this.changeSearch.bind(this)} eventKey="Location">Location</MenuItem>
                <MenuItem onSelect={this.changeSearch.bind(this)} eventKey="Artist">Artist</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </Navbar.Form>
          <Navbar.Form>
        </Navbar.Form>
        </Navbar>
      </div>
    )
  }
};

export default Favorites;

