import { routerSelectors } from '@angular-enterprise-stack/shared/ngrx';
import { ToolbarComponent } from '@angular-enterprise-stack/user-sync-tool/ui';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ust-feat-shell',
  standalone: true,
  templateUrl: './feat-shell.component.html',
  styleUrls: ['./feat-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ToolbarComponent],
})
export class FeatShellComponent {
  private readonly store = inject(Store);
  private readonly allRoutes = ['Home', 'Favourite'];

  private currentRoute = toSignal(
    this.store.select(routerSelectors.selectUrl),
    { initialValue: '' },
  );

  public readonly routes = computed(() =>
    this.allRoutes.filter(route => !this.currentRoute().includes(route)),
  );
}
