
//system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditService } from './home/edit.service';
import { HttpModule } from '@angular/http';


//kendo
import { GridModule } from '@progress/kendo-angular-grid';

//modules
import { LibraryModule } from './library/library.module';

//components
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing.module';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ConstHelperService } from './auth/services/hostHelper.service';
import { UserService } from './auth/services/userService';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    routing,
    BrowserModule,
    RouterModule,
    LibraryModule,
    FormsModule,
    GridModule,
    ReactiveFormsModule,

  ],
  providers: [ ConstHelperService ,
    UserService,
    AuthService,
    AuthGuard,
    {
    deps: [HttpClient],
    provide: EditService,
    useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
}],
  bootstrap: [AppComponent]
})
export class AppModule { }


