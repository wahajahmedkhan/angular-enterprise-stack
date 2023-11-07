import { SearchSmartComponent } from '@angular-enterprise-stack/forecast-fusion/feat-search';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ff-shell',
  standalone: true,
  imports: [SearchSmartComponent],
  templateUrl: './shell-smart.component.html',
  styleUrls: ['./shell-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellSmartComponent {}
