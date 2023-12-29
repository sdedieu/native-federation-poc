import { Routes, UrlMatcher, UrlSegment } from '@angular/router';

export function startsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map(u => u.path).join('/');
    if (fullUrl.startsWith(prefix)) {
      return ({ consumed: url });
    }
    return null;
  };
}

export const routes: Routes = [
  {
    path: 'mfe-angular',
    loadComponent: async () => (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: "mfe-angular",
      exposedModule: "./component",
      componentName: 'mfe-angular-web-component'
    }
  }, {
    matcher: startsWith('mfe-react'),
    loadComponent: async () => (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: "mfe-react",
      exposedModule: "./component",
      componentName: 'mfe-react-web-component'
    }
  },
  {
    path: '', redirectTo: 'mfe-react', pathMatch: 'full'
  }
];
