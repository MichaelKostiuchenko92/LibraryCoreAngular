import { AuthGuard } from './auth/auth.guard';

//system
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const appRoutes: Routes = [

    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    {path:'registration', component:RegistrationComponent},
    {path: "login", component: LoginComponent},
    { path: 'library', 
      children: [
        { path: '', loadChildren: 'app/library/library.module#LibraryModule' },
      ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
  ];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
