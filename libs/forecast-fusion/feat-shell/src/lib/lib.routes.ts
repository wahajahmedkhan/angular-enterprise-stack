import { Route } from '@angular/router';
import { ShellSmartComponent } from './smart-components/shell/shell.smart-component';

export const ffFeatShellRoutes: Route[] = [
  {
    path: '',
    component: ShellSmartComponent,
    children: [],
  },
];
