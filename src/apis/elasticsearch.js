import axios from 'axios'
import { fetchQuerySetAction } from '../redux/actions/elasticsearch'


const fetchQuerySet = () => {
	const url = process.env.REACT_APP_ELASTICSEARCH_URL

	debugger
	return (dispatch) => {
		axios.get(url)
			.then((response) => {
				dispatch(fetchQuerySetAction(response.data))
			})
			.catch((response) => {
			})
	}
}

export default fetchQuerySet;