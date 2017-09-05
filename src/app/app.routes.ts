// import { AuthGuard } from './shared/guard/auth.guard';
import { Routes } from '@angular/router';
// import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [
    {
        path: '', redirectTo: 'app', pathMatch: 'full'
    },
    {
        path: 'app', loadChildren: 'app/layout/layout.module#LayoutModule'
    },
];