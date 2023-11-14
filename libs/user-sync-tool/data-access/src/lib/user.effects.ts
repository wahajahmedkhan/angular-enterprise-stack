import { ErrorMessages } from '@angular-enterprise-stack/user-sync-tool/types';
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
import { userActions } from './user.actions';
import { selectUserList } from './user.selectors';
import { UserService } from './user.service';

@Injectable()
export class UserEffects implements OnInitEffects {
  private readonly actions$ = inject(Actions);

  private readonly store = inject(Store);
  private readonly userService = inject(UserService);

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
}
