export type StatusTypes = 'idle' | 'pending' | 'success' | 'error';

export enum SuccessMessages {
  RANDOM_USER_SUCCESS = 'Random user added successfully',
  USER_ADDED_TO_FAVOURITE_SUCCESS = 'User successfully added to favourite lise',
}

export enum ErrorMessages {
  INTERNAL_SERVER_ERROR = 'Internal server error',
  RANDOM_USER_ERROR = 'Random user not added',
  MAXIMUM_FAVOURITE_USER_ERROR = 'Maximum favourite users selected. Delete some to add more',
  FAVOURITE_USER_EXIST_ERROR = 'This user is already a favourite user',
}
