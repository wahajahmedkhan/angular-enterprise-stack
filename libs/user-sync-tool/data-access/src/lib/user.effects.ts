import {
  ErrorMessages,
  SuccessMessages,
} from '@angular-enterprise-stack/user-sync-tool/types';
import { Injectable, inject } from '@angular/core';
import {
  Actions,
  OnInitEffects,
  concatLatestFrom,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { findRandomUser } from './find-random-user';
import { ToasterService } from './toast.service';
import { userActions } from './user.actions';
import { selectFavouriteUser, selectUserList } from './user.selectors';
import { UserService } from './user.service';

@Injectable()
export class UserEffects implements OnInitEffects {
  private readonly actions$ = inject(Actions);

  private readonly store = inject(Store);
  private readonly userService = inject(UserService);
  private readonly toasterService = inject(ToasterService);

  ngrxOnInitEffects(): Action {
    return userActions.fetchUserList();
  }

  fetchUserList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.fetchUserList),
      mergeMap(() =>
        this.userService.fetchUserList().pipe(
          map(res => userActions.fetchUserListSuccess(res)),
          catchError(err =>
            of(
              userActions.fetchUserListError({
                error: err.error ?? ErrorMessages.INTERNAL_SERVER_ERROR,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  fetchUserListAndAddRandomUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.fetchUserListAndAddRandomUser),
      mergeMap(() =>
        this.userService.fetchUserList(true).pipe(
          map(res => userActions.fetchUserListAndAddRandomUserSuccess(res)),
          catchError(err =>
            of(
              userActions.fetchUserListAndAddRandomUserError({
                error: err.error ?? ErrorMessages.INTERNAL_SERVER_ERROR,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  addNewRandomUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.fetchUserListAndAddRandomUserSuccess),
      concatLatestFrom(() => this.store.select(selectUserList)),
      delay(600),
      map(([{ data }, currentUsers]) =>
        userActions.addNewRandomUser(findRandomUser(currentUsers, data)),
      ),
    ),
  );

  removeFirstUserFromTheList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.fetchUserListAndAddRandomUserSuccess),
      map(() => userActions.removeFirstUserFromTheList()),
    ),
  );

  addUserToFavouriteList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.addUserToFavouriteList),
      concatLatestFrom(() => this.store.select(selectFavouriteUser)),
      map(([user, favouriteUsers]) => {
        if (favouriteUsers.length === 10) {
          return userActions.addUserToFavouriteListError({
            error: ErrorMessages.MAXIMUM_FAVOURITE_USER_ERROR,
          });
        }
        if (favouriteUsers.find(fUsers => fUsers.id === user.id)) {
          return userActions.addUserToFavouriteListError({
            error: ErrorMessages.FAVOURITE_USER_EXIST_ERROR,
          });
        }
        return userActions.addUserToFavouriteListSuccess(user);
      }),
    ),
  );

  showAddUserToFavourToastAlerts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.addUserToFavouriteListSuccess),
        map(() =>
          this.toasterService.showToast(
            SuccessMessages.USER_ADDED_TO_FAVOURITE_SUCCESS,
            'success',
          ),
        ),
      ),
    { dispatch: false },
  );

  showErrorToastAlerts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          userActions.addUserToFavouriteListError,
          userActions.fetchUserListError,
          userActions.fetchUserListAndAddRandomUserError,
        ),
        map(({ error }) => this.toasterService.showToast(error, 'error')),
      ),
    { dispatch: false },
  );
}
