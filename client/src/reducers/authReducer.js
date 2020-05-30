import { FETCH_USER } from '../actions/types';
import { FloatingActionButton } from 'materialize-css';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}
