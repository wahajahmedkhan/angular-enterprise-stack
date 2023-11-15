import { IUserStateModel } from '@angular-enterprise-stack/user-sync-tool/types';
import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';

export const USER_STATE_KEY = 'userState';

export const initialUserState: IUserStateModel = {
  status: 'idle',
  data: [],
  favourite: [],
  error: '',
};

export const userStateReducer = createReducer<IUserStateModel>(
  initialUserState,
  on(userActions.fetchUserList, state => ({
    ...state,
    status: 'pending',
  })),
  on(userActions.fetchUserListSuccess, (state, { data }) => ({
    ...state,
    status: 'success',
    data: data,
  })),
  on(userActions.fetchUserListError, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
  on(userActions.addNewRandomUser, (state, user) => ({
    ...state,
    data: [...state.data, user],
  })),
  on(userActions.removeFirstUserFromTheList, state => ({
    ...state,
    data: [...state.data].filter((_value, ind) => ind !== 0),
  })),
  on(userActions.fetchUserListAndAddRandomUserError, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(userActions.addUserToFavouriteListSuccess, (state, user) => ({
    ...state,
    favourite: [...state.favourite, user],
  })),
  on(userActions.removeUserFromFavouriteList, (state, { id }) => ({
    ...state,
    favourite: [...state.favourite].filter(user => user.id !== id),
  })),
);
