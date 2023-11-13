import { ErrorMessages } from '@angular-enterprise-stack/user-sync-tool/types';
import { Injectable, inject } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { userActions } from './user.actions';
import { UserService } from './user.service';

@Injectable()
export class UserEffects implements OnInitEffects {
  private readonly actions$ = inject(Actions);

  private readonly store = Store;
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
}
