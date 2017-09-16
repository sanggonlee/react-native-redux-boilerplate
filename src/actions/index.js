import * as Api from '../api';

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const requestData = (name) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUEST_DATA
    });

    return Api.get('http://someurl', {name})
      .then(resp => {
        dispatch(receiveData(resp));
      });
  };
};

export const receiveData = (data) => {
  return {
    type: RECEIVE_DATA,
    data
  };
};