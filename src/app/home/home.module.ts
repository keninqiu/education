import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    // { path: 'new', component: MembersNewComponent, pathMatch: 'full' },
    // { path: ':id', component: MembersDetailsComponent, pathMatch: 'full' },

];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule
    
  ],
  declarations: [
   HomeComponent

  ],
  

})
export  class HomeModule {
}