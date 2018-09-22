import { createSelector } from 'reselect';
import { initialGraphsListState, initialGraphDataState } from './reducer';

/**
 * Direct selector to the graphs list state domain
 */

const selectGraphsListDomain = state =>
  state.get('graphsList', initialGraphsListState);

const makeSelectGraphsList = () =>
  createSelector(selectGraphsListDomain, substate => substate.toJS());

const selectGraphDataDomain = state =>
  state.get('graphData', initialGraphDataState);

const makeSelectGraphData = () =>
  createSelector(selectGraphDataDomain, substate => substate.toJS());

export {
  selectGraphsListDomain,
  makeSelectGraphsList,
  selectGraphDataDomain,
  makeSelectGraphData,
};
