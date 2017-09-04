import { Route, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren:'app/home/home.module#HomeModule' },
      { path: 'login', loadChildren:'app/login/login.module#LoginModule' },
      { path: 'register', loadChildren:'app/register/register.module#RegisterModule' },
      { path: 'chat', loadChildren:'app/secured/chat/chat.module#ChatModule' },
    //   { path: 'setup', loadChildren: () => System.import('../setup/setup.module') },
    //   { path: 'general', loadChildren: () => System.import('../general/general.module') },

    ]
  }
];

export const ROUTES  = routes;