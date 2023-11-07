import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ff-footer-ui',
  standalone: true,
  template: ` <footer>
    <p>&copy; 2023 ForecastFusion</p>
  </footer>`,
  styles: [
    `
      footer {
        background-color: #008cba;
        text-align: center;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterUiComponent {}
