/*
 *
 * HomePage actions
 *
 */
import axios from 'axios';
import {
  FETCHING_GRAPHS_LIST,
  UPDATE_GRAPHS_LIST,
  FAIL_GRAPHS_LIST,
  UPDATE_GRAPH_DATA,
} from './constants';

export const fetchGraphsList = () => async dispatch => {
  dispatch({ type: FETCHING_GRAPHS_LIST });
  try {
    const { data } = await axios.get('http://localhost:8000/graphs');
    dispatch({ type: UPDATE_GRAPHS_LIST, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_GRAPHS_LIST });
  }
};

export const setGraphData = data => ({
  type: UPDATE_GRAPH_DATA,
  payload: data,
});
