import { SINGIN, SINGUP, LOGOUT, ITEMS_LOADING } from './types';
import axios from 'axios';

export const login = auth => dispatch => {
	dispatch(setLoading());
	axios
	  .post('./api/signin', auth)
	  .then(res => dispatch({
      type: SINGIN,
      payload: res.data
	  })
	);
};

export const logout = auth => dispatch => {
	dispatch(setLoading());
	axios
	  .post('./api/logout', auth)
	  .then(res => dispatch({
      type: LOGOUT,
      payload: res.data
	  })
	);
};

export const signup = auth => dispatch => {
	dispatch(setLoading());
	axios
	  .post('./api/signup', auth)
	  .then(res => dispatch({
      type: SINGUP,
      payload: res.data
	  })
	);
};

export const setLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};