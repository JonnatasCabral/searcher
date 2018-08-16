import React, { Component } from 'react';

class SearchField extends Component {
	constructor(props){
		super(props);
	}
	handleChange(event, state, ownProps) {
		debugger
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

export default SearchField;
