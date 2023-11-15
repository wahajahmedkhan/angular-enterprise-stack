import { ErrorMessages } from '@angular-enterprise-stack/user-sync-tool/types';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { ToasterService } from './toast.service';
import { userActions } from './user.actions';
import { UserEffects } from './user.effects';
import { UserService } from './user.service';

describe('UserEffects', () => {
  let effects: UserEffects;
  let actions$: Observable<any>;
  let userService: UserService;
  let toasterService: ToasterService;
  let store: MockStore;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        provideMockStore({}),
        { provide: UserService, useValue: { fetchUserList: jest.fn() } },
        { provide: ToasterService, useValue: { showToast: jest.fn() } },
      ],
    });

    effects = TestBed.inject(UserEffects);
    userService = TestBed.inject(UserService);
    toasterService = TestBed.inject(ToasterService);
    store = TestBed.inject(MockStore);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should dispatch fetchUserListSuccess on successful user list fetch', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const mock = { data: [] } as any;
      const action = userActions.fetchUserList();
      const outcome = userActions.fetchUserListSuccess(mock);

      actions$ = hot('-a', { a: action });
      const response = cold('-b|', {
        b: mock,
      });
      jest.spyOn(userService, 'fetchUserList').mockReturnValue(response);

      expectObservable(effects.fetchUserList$).toBe('--c', { c: outcome });
    });
  });

  it('should dispatch fetchUserListError on failure to fetch user list', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action = userActions.fetchUserList();
      const error = new Error(ErrorMessages.INTERNAL_SERVER_ERROR);
      const mock = { error: error.message } as any;
      const outcome = userActions.fetchUserListError(mock);

      actions$ = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      jest
        .spyOn(userService, 'fetchUserList')
        .mockReturnValue(response as never);

      expectObservable(effects.fetchUserList$).toBe('--c', { c: outcome });
    });
  });
});
