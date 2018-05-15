
//system
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './account/auth.guard';


export const appRoutes: Routes = [

    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'library', canActivate: [AuthGuard], loadChildren: 'app/library/library.module#LibraryModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
  ];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
