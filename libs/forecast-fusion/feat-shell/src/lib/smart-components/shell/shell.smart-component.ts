import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ff-shell',
  standalone: true,
  imports: [],
  templateUrl: './shell.smart-component.html',
  styleUrls: ['./shell.smart-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellSmartComponent {}
