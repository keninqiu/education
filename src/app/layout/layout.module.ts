import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './layout.routes';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent

  ],
  

})
export  class LayoutModule {
}