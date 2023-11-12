import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ust-favourite',
  standalone: true,
  templateUrl: './favourite-smart.component.html',
  styleUrls: ['./favourite-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteSmartComponent {}
