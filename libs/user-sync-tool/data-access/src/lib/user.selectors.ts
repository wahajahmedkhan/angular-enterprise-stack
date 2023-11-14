import { USER_STATE_KEY } from '@angular-enterprise-stack/user-sync-tool/data-access';
import { IUserStateModel } from '@angular-enterprise-stack/user-sync-tool/types';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature =
  createFeatureSelector<IUserStateModel>(USER_STATE_KEY);

export const selectUserStatus = createSelector(selectFeature, s => s.status);
export const selectUserList = createSelector(selectFeature, s => s.data);

export const selectUserError = createSelector(selectFeature, s => s.error);

export const selectFavouriteUser = createSelector(
  selectFeature,
  s => s.favourite,
);
