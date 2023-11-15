import {
  userActions,
  userSelectors,
} from '@angular-enterprise-stack/user-sync-tool/data-access';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FavouriteSmartComponent } from './favourite-smart.component';

describe('FeatFavouriteComponent', () => {
  let component: FavouriteSmartComponent;
  let fixture: ComponentFixture<FavouriteSmartComponent>;
  let store: MockStore;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteSmartComponent],
      providers: [
        provideNoopAnimations(),
        provideMockStore({
          initialState: {
            status: 'idle',
            data: [],
            favourite: [],
            error: '',
          },
          selectors: [
            { selector: userSelectors.selectFavouriteUser, value: [] },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    spy = jest.spyOn(store, 'dispatch');
  });

  it('should remove user from favourite list', () => {
    component.removeFromFavourites(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      userActions.removeUserFromFavouriteList({ id: 1 }),
    );
  });
});
