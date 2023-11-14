import { userSelectors } from '@angular-enterprise-stack/user-sync-tool/data-access';
import { IUser } from '@angular-enterprise-stack/user-sync-tool/types';
import {
  ToggleSwitchComponent,
  UserCardComponent,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatRandomUsersSmartComponent {
  private readonly store = inject(Store);
  readonly users = toSignal(this.store.select(userSelectors.selectUserList), {
    initialValue: [],
  });
  readonly favourite = toSignal(
    this.store.select(userSelectors.selectFavouriteUser),
    { initialValue: [] },
  );
  intervalId: any;

  toggleTimer(isActive: boolean) {
    if (isActive) {
      this.intervalId = setInterval(() => {
        this.fetchNewUser();
      }, 5000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  fetchNewUser() {
    // Fetch a new user and update the list
    // Add a new user
  }

  addToFavourites(user: IUser): void {
    // Add user to favourites, ensuring the limit is respected
  }
}
