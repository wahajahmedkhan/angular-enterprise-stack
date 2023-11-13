import {
  USER_STATE_KEY,
  UserEffects,
  UserReqresService,
  UserService,
  userStateReducer,
} from '@angular-enterprise-stack/user-sync-tool/data-access';
import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { FeatShellComponent } from './feat-shell/feat-shell.component';

export const ustFeatShellRoutes: Route[] = [
  {
    path: '',
    component: FeatShellComponent,
    providers: [
      UserService,
      UserReqresService,
      provideState(USER_STATE_KEY, [userStateReducer]),
      provideEffects([UserEffects]),
    ],
  },
];
