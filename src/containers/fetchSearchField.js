import { connect } from 'react-redux'
import SearchField from '../components/searchField'


const handleChange = (event, state, ownProps) => {
	this.setState({value: event.target.value});
}

const handleSubmit = (event, state, ownProps) => {
	debugger
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

const mapStateToProps = (state, ownProps) => ({
	handleChange: (e) => handleChange(e, state ownProps),
	handleSubmit: (e) => handleSubmit(e, state, ownProps)
})



export default connect(
  mapStateToProps,
  null
)(SearchField)

