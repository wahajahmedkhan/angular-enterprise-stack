import { IResponseListUser } from '@angular-enterprise-stack/user-sync-tool/types';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReqresService } from './user-reqres.service';

@Injectable()
export class UserService {
  private readonly userReqresService = inject(UserReqresService);
  public fetchUserList(isForRandom?: boolean): Observable<IResponseListUser> {
    return this.userReqresService.fetchUserList(isForRandom);
  }
}
