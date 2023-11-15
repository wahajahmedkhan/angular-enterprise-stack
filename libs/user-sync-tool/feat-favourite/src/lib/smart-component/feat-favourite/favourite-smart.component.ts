import { trackById } from '@angular-enterprise-stack/shared/angular';
import {
  userActions,
  userSelectors,
} from '@angular-enterprise-stack/user-sync-tool/data-access';
import {
  UserCardComponent,
  listAnimation,
} from '@angular-enterprise-stack/user-sync-tool/ui';
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ust-favourite',
  standalone: true,
  imports: [UserCardComponent, NgForOf],
  animations: [listAnimation],
  templateUrl: './favourite-smart.component.html',
  styleUrls: ['./favourite-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteSmartComponent {
  private readonly store = inject(Store);
  readonly favourite = toSignal(
    this.store.select(userSelectors.selectFavouriteUser),
    { initialValue: [] },
  );

  readonly trackById = trackById;

  removeFromFavourites(id: number): void {
    this.store.dispatch(userActions.removeUserFromFavouriteList({ id }));
  }
}
