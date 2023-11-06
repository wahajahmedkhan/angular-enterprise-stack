import { ActionReducer } from '@ngrx/store';

type PrefixFn = () => string;

export function debug<T extends object>(
  actionsBlockList: Array<string> = [],
  groupPrefix: PrefixFn = () => '',
) {
  return function (reducer: ActionReducer<T>): ActionReducer<T> {
    return function newReducer(state, action) {
      const nextState = reducer(state, action);

      if (actionsBlockList.includes(action.type)) {
        return nextState;
      }

      const { type, ...payload } = action;
      console.groupCollapsed(`${groupPrefix()}${type}`);
      console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
      console.log(
        `%c action payload`,
        `color: #03A9F4; font-weight: bold`,
        payload,
      );
      console.log(
        `%c next state`,
        `color: #4CAF50; font-weight: bold`,
        nextState,
      );
      console.groupEnd();

      return nextState;
    };
  };
}
