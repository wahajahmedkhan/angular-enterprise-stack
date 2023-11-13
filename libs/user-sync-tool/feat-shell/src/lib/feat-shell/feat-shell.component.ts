import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ust-feat-shell',
  standalone: true,
  templateUrl: './feat-shell.component.html',
  styleUrls: ['./feat-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class FeatShellComponent {}
