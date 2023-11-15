import { trackById } from '@angular-enterprise-stack/shared/angular';
import {
  userActions,
  userSelectors,
} from '@angular-enterprise-stack/user-sync-tool/data-access';
import { IUser } from '@angular-enterprise-stack/user-sync-tool/types';
import {
  ToggleSwitchComponent,
  UserCardComponent,
  listAnimation,
} from '@angular-enterprise-stack/user-sync-tool/ui';
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ust-random-users',
  standalone: true,
  imports: [ToggleSwitchComponent, NgForOf, UserCardComponent],
  templateUrl: './feat-random-users-smart.component.html',
  styleUrls: ['./feat-random-users-smart.component.scss'],
  animations: [listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatRandomUsersSmartComponent {
  private readonly store = inject(Store);
  readonly users = toSignal(this.store.select(userSelectors.selectUserList), {
    initialValue: [],
  });

  private intervalId: any;

  readonly trackById = trackById;

  toggleTimer(isActive: boolean) {
    if (isActive) {
      this.intervalId = setInterval(() => {
        this.fetchNewUser();
      }, 4000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  fetchNewUser() {
    this.store.dispatch(userActions.fetchUserListAndAddRandomUser());
  }

  addToFavourites(user: IUser): void {
    this.store.dispatch(userActions.addUserToFavouriteList(user));
  }
}
