import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root-mfe-angular',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterOutlet, RouterLink],
  template: `
    <button mat-flat-button [routerLink]="['/mfe-angular/child-a']" color="primary">Child A</button>
    <button mat-flat-button [routerLink]="['/mfe-angular/child-b']" color="accent">Child B</button>

    <router-outlet />
  `,
  styles: [`
    button {
      margin: 8px;
    }
  `]
})
export class AppComponent {
  title = 'mfe-angular';
}
