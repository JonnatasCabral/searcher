import axios from 'axios'
import { fetchQuerySetAction } from '../redux/actions/elasticsearch'

const fetchQuerySet = () => {
	const url = 'http://search-scraping-mongo-es-iyvkbxwcm2j2mbv7lhbr4upwwu.us-east-1.es.amazonaws.com:80'
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