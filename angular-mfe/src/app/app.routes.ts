import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'mfe-angular/child-a', loadComponent: async () => (await import('./child-a/child-a.component')).ChildAComponent },
  { path: 'mfe-angular/child-b', loadComponent: async () => (await import('./child-b/child-b.component')).ChildBComponent },
  { path: 'mfe-angular', redirectTo: '/mfe-angular/child-a', pathMatch: 'full' },
  { path: '', redirectTo: '/mfe-angular', pathMatch: 'full' }
];
