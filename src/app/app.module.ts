import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { Appprofile } from './profile.component';
import { AppAbout } from './about.component'; 
import { AppProject } from './project.component'; 
import { AppForm } from './form.component'; 
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [ 
   { path: 'profile', component: Appprofile }, 
   { path: 'about', component: AppAbout }, 
   { path: 'project', component: AppProject }, 
   { path: 'register', component: AppForm }, 
];  

@NgModule({ 
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)], 
   
   declarations: [ AppComponent,Appprofile,AppAbout, AppProject, AppForm,], 
   bootstrap: [ AppComponent ] 
})
export class AppModule { }
