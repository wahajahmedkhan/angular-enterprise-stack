import { IUser } from '@angular-enterprise-stack/user-sync-tool/types';

export function findRandomUser(
  currentUsers: Array<IUser>,
  newUserList: Array<IUser>,
): IUser {
  const user = [...currentUsers];
  const usersNotInTheList = newUserList.filter(newUser =>
    user.every(currentUser => currentUser.email !== newUser.email),
  );
  return usersNotInTheList[
    Math.floor(Math.random() * usersNotInTheList.length)
  ];
}
