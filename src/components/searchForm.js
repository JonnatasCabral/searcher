import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchQuerySet from '../apis/elasticsearch'


class SearchField extends Component {
	constructor(props){
		super(props);
		this.state = { value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.fetchQuery = this.fetchQuery.bind(this);
	}

	handleChange(event, state, ownProps) {
		this.setState({value: event.target.value});
	}

	fetchQuery(event, state, ownProps){
	  alert('A name was submitted: ' + this.state.value);
	  // event.preventDefault();
	  this.props.fetchQuerySet()
	}

	render(){
		return(
			<div>
		    <label>
		      Name:
		      <input type="text" onChange={this.handleChange} />
		    </label>
		    <input type='submit' onClick={ this.fetchQuery } value="Submit" />
		    <div>{this.props.stateServer ? this.props.stateServer.cluster_name :''}</div>
			</div>
		)
	}
	
}

const mapDispatchToProps = (dispatch) => ({
	fetchQuerySet: () => dispatch(fetchQuerySet())
})

const mapStateToProps = (state) => {
	return {
		stateServer: state.result.data
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
