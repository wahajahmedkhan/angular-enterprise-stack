import { IUser } from '@angular-enterprise-stack/user-sync-tool/types';

const MAX_USER_IN_LIST = 10;
export function addRandomUser(
  currentUsers: Array<IUser>,
  newUserList: Array<IUser>,
): Array<IUser> {
  const usersNotInTheList = newUserList.filter(newUser =>
    currentUsers.some(currentUser => currentUser.id !== newUser.id),
  );
  const randomUser =
    usersNotInTheList[Math.floor(Math.random() * usersNotInTheList.length)];

  if (currentUsers.length === MAX_USER_IN_LIST) {
    currentUsers.shift();
  }

  return [...currentUsers, randomUser];
}
