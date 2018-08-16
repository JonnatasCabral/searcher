import { connect } from 'react-redux'
import SearchField from '../components/searchField'


const handleChange = (event) => {
	this.setState({value: event.target.value});
}

const handleSubmit = (event) => {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

const mapStateToProps = (state) => ({
  handleSubmit: handleSubmit,
	value: state.value,
	handleChange: handleChange
})



export default connect(
  mapStateToProps,
  null
)(SearchField)

