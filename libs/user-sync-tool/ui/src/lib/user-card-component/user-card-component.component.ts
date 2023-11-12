import { IUser } from '@angular-enterprise-stack/user-sync-tool/types';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ust-user-card-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-card-component.component.html',
  styleUrls: ['./user-card-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponentComponent {
  @Input() user?: IUser;
  imageLoaded: boolean = false;
}
