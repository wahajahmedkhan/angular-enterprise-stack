import { ToolbarComponent } from '@angular-enterprise-stack/user-sync-tool/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ust-feat-shell',
  standalone: true,
  templateUrl: './feat-shell.component.html',
  styleUrls: ['./feat-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ToolbarComponent],
})
export class FeatShellComponent {}
