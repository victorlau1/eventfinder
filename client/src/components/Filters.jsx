import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewLocation, setDate, fetchEvents } from '../actions/index.js';



// ignore the fact that this is called Favorites but the file is called Filters
class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
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
    console.log('Search',this.state.search)
    this.props.getNewLocation(this.state.search)
    //Figure out Async Here
    this.props.fetchEvents(this.props.startDate, payload.data.lat, payload.data.lng)
  }

  handleDateChange(moment){
    this.props.setDate(moment);
    this.props.fetchEvents(moment.format('YYYY-MM-DD'), this.props.mapCenter.loc, this.props.mapCenter.lng);
  }

  render() {

    const datepicker =  {
      paddingTop: '3.5px'
    }

    return (
      <div>
        <Navbar bsStyle="info">
          <Navbar.Form pullLeft>
            <FormGroup>
                <FormControl type="text" placeholder="Location..." onChange={this.handleSearch.bind(this)}/>
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </Navbar.Form>
          <Navbar.Form>
          <div style={datepicker}>
        <DatePicker
          dateFormat="MM/DD/YYYY"
          selected={this.props.startDate}
          onChange={this.handleDateChange.bind(this)}
        /> </div>
        </Navbar.Form>
        </Navbar>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    startDate: state.startDate,
    mapCenter: state.mapCenter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNewLocation ,setDate , fetchEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);