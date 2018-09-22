/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCHING_GRAPHS_LIST,
  UPDATE_GRAPHS_LIST,
  FAIL_GRAPHS_LIST,
  UPDATE_GRAPH_DATA,
} from './constants';

export const initialGraphsListState = fromJS({
  state: 'PENDING',
  data: [],
  isLoading: false,
});

export const initialGraphDataState = fromJS({
  spec: {},
});

export const graphsListReducer = (state = initialGraphsListState, action) => {
  switch (action.type) {
    case FETCHING_GRAPHS_LIST:
      return state.merge({ state: 'PENDING', isLoading: true });
    case UPDATE_GRAPHS_LIST:
      return state.merge({
        state: 'SUCCESS',
        data: action.payload,
        isLoading: false,
      });
    case FAIL_GRAPHS_LIST:
      return initialGraphsListState.set('state', 'FAIL');
    default:
      return state;
  }
};

export const graphDataReducer = (state = initialGraphDataState, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_DATA:
      return state.set('spec', {
        ...action.payload,
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
      });
    default:
      return state;
  }
};
