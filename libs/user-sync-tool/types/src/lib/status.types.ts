export type StatusTypes = 'idle' | 'pending' | 'success' | 'error';

export enum SuccessMessages {
  USER_ADDED_TO_FAVOURITE_SUCCESS = 'User successfully added to favourite list',
}

export enum ErrorMessages {
  INTERNAL_SERVER_ERROR = 'Internal server error',
  MAXIMUM_FAVOURITE_USER_ERROR = 'Maximum favourite users selected. Delete some to add more',
  FAVOURITE_USER_EXIST_ERROR = 'This user is already a favourite user',
}
