import {
  userActions,
  userSelectors,
} from '@angular-enterprise-stack/user-sync-tool/data-access';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FeatRandomUsersSmartComponent } from './feat-random-users-smart.component';

describe('FeatRandomUsersSmartComponent', () => {
  let component: FeatRandomUsersSmartComponent;
  let fixture: ComponentFixture<FeatRandomUsersSmartComponent>;
  let store: MockStore;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideNoopAnimations(),
        provideMockStore({
          initialState: {
            status: 'idle',
            data: [],
            favourite: [],
            error: '',
          },
          selectors: [{ selector: userSelectors.selectUserList, value: [] }],
        }),
      ],
    });

    fixture = TestBed.createComponent(FeatRandomUsersSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    spy = jest.spyOn(store, 'dispatch');
  });

  it('should fetch new user', () => {
    component.fetchNewUser();
    expect(store.dispatch).toBeCalledWith(
      userActions.fetchUserListAndAddRandomUser(),
    );
  });

  it('should add the selected user to favourite list', () => {
    const userMock = { email: 'testing' } as any;
    component.addToFavourites(userMock);
    expect(store.dispatch).toBeCalledWith(
      userActions.addUserToFavouriteList(userMock),
    );
  });

  it('should start a timer when toggleTimer is called with true', fakeAsync(() => {
    jest.spyOn(component, 'fetchNewUser');
    component.toggleTimer(true);
    tick(8000); // Simulate 8 seconds passing
    component.toggleTimer(false);
    expect(component.fetchNewUser).toHaveBeenCalledTimes(2); //should call 2 times
    flush(); // Clean up any outstanding timers
  }));

  it('should stop the timer when toggleTimer is called with false', fakeAsync(() => {
    const fecthSpy = jest.spyOn(component, 'fetchNewUser');

    component.toggleTimer(true);
    tick(4000); // Timer started and 4 seconds pass
    component.toggleTimer(false);
    tick(4000); // Another 4 seconds pass
    expect(fecthSpy).toHaveBeenCalledTimes(1); // Only one call should have been made
    flush(); // Clean up any outstanding timers
  }));
});
