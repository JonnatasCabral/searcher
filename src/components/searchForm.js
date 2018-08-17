import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchField extends Component {
	constructor(props){
		super(props);
		this.state = { value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event, state, ownProps) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event, state, ownProps){
	  alert('A name was submitted: ' + this.state.value);
	  event.preventDefault();
	}

	render(){
		return(

			<form onSubmit={ this.handleSubmit }>
		    <label>
		      Name:
		      <input type="text" onChange={this.handleChange} />
		    </label>
		    <input type="submit" value="Submit" />
  		</form>
		)
	}
	
}

const mapDispatchToProps = (dispatch) => ({
	fetch_queryset: () => dispatch()
})

export default connect(null, mapDispatchToProps)(SearchField);
