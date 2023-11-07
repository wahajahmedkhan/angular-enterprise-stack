import { ListSmartComponent } from '@angular-enterprise-stack/forecast-fusion/feat-list';
import { SearchSmartComponent } from '@angular-enterprise-stack/forecast-fusion/feat-search';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterUiComponent } from '../../ui/footer-ui.component';

@Component({
  selector: 'ff-shell',
  standalone: true,
  imports: [SearchSmartComponent, FooterUiComponent, ListSmartComponent],
  templateUrl: './shell-smart.component.html',
  styleUrls: ['./shell-smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellSmartComponent {}
