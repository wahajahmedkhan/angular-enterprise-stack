import { StatusTypes } from './status.types';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserStateModel {
  status: StatusTypes;
  data: Array<IUser>;
  favourite: Array<IUser>;
  error: string;
}

export interface IResponseListUser {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<IUser>;
  support: {
    url: string;
    text: string;
  };
}
