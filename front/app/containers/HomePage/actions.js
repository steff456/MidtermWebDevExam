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
    const { data } = await axios.get(
      'https://murmuring-anchorage-92089.herokuapp.com/graphs',
    );
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

export const saveGraphData = data => async dispatch => {
  // dispatch({
  //   type: SAVING_GRAPH,
  //   payload: data,
  // });
  try {
    const { res } = await axios.post(
      'https://murmuring-anchorage-92089.herokuapp.com/graphs',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(res);
    dispatch(fetchGraphsList());
    // dispatch({ type: SAVED_GRAPH, payload: res });
  } catch (error) {
    console.log(error);
    // dispatch({ type: FAIL_GRAPH_SAVE });
  }
};
