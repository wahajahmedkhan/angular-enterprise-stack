import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'ust-toggle-switch-component',
  standalone: true,
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleSwitchComponent {
  @Output() toggleChange = new EventEmitter<boolean>();
  isActive: boolean = false;

  toggle() {
    this.isActive = !this.isActive;
    this.toggleChange.emit(this.isActive);
  }
}
