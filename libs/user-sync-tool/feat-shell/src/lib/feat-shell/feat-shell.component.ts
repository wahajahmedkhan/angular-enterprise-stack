import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ust-feat-shell',
  standalone: true,
  templateUrl: './feat-shell.component.html',
  styleUrls: ['./feat-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatShellComponent {}
