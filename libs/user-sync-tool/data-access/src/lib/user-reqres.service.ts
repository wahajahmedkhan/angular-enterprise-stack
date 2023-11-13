import { IResponseListUser } from '@angular-enterprise-stack/user-sync-tool/types';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserReqresService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'https://reqres.in/api';

  public fetchUserList(isForRandom?: boolean): Observable<IResponseListUser> {
    const params = `page=1&per_page=${isForRandom ? '50' : '10'}`;
    return this.httpClient.get<IResponseListUser>(
      `${this.apiUrl}/users?${params}`,
    );
  }
}
