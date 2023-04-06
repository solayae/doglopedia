import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export function getDogs() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/dogs');
    return dispatch({
      type: 'GET_DOGS',
      payload: response.data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/dogs/?name=${name}`
    );
    return dispatch({
      type: 'GET_BY_NAME',
      payload: response.data,
    });
  };
}


export function getDetail(id) {
  return async function (dispatch) {
    let getId = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: getId.data,
    });
  };
}

