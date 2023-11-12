import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ust-random-users',
  standalone: true,
  templateUrl: './feat-random-users-smart.component.html',
  styleUrls: ['./feat-random-users-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatRandomUsersSmartComponent {}
