import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        // loadComponent: () =>
        //   import('../tab1/tab1.page').then((m) => m.Tab1Page),
        children: [
          {
            path: '',
            loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page),
          },
          {
            path: 'sub-page',
            loadComponent: () => import('./sub-page/sub-page.page').then( m => m.SubPagePage)
          },

        ]
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'sub-page',
    loadComponent: () => import('./sub-page/sub-page.page').then( m => m.SubPagePage)
  },
];
