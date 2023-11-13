import {
  ErrorMessages,
  IResponseListUser,
  IUser,
} from '@angular-enterprise-stack/user-sync-tool/types';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'fetch user list': emptyProps(),
    'fetch user list success': props<IResponseListUser>(),
    'fetch user list error': props<{ error: string }>(),
    'fetch user list and add random user': emptyProps(),
    'fetch user list and add random user success': props<IResponseListUser>(),
    'fetch user list and add random user error': props<{
      error: string | ErrorMessages;
    }>(),
    'add user to favourite list': props<IUser>(),
    'add user to favourite list success': props<IUser>(),
    'add user to favourite list error': props<{
      error: string | ErrorMessages;
    }>(),
    'remove user from favourite list': props<{
      id: number;
    }>(),
  },
});
