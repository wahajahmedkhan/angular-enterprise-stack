import { IUserStateModel } from '@angular-enterprise-stack/user-sync-tool/types';
import { createReducer, on } from '@ngrx/store';
import { addRandomUser } from './add-random-user';
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
  on(userActions.fetchUserListSuccess, (state, data) => ({
    ...state,
    status: 'success',
    data: data.data,
  })),
  on(userActions.fetchUserListError, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
  on(userActions.fetchUserListAndAddRandomUserSuccess, (state, { data }) => ({
    ...state,
    data: addRandomUser(state.data, data),
  })),
  on(userActions.fetchUserListAndAddRandomUserError, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(userActions.addUserToFavouriteListSuccess, (state, user) => ({
    ...state,
    favourite: [...state.favourite, user],
  })),
);
