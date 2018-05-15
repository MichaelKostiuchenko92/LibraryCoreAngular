
//system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//kendo
import { GridModule } from '@progress/kendo-angular-grid';

//modules
import { LibraryModule } from './library/library.module';
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/modules/shared.module';

//components
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing.module';

import { ConfigService } from './shared/utils/config.service';
import { AuthGuard } from './account/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    LibraryModule,
    FormsModule,
    GridModule,
    AccountModule,
    HttpModule,
  ],
  providers: [ConfigService, AuthGuard,
{ 
  provide: XHRBackend, 
  useClass: AuthenticateXHRBackend
}],
  bootstrap: [AppComponent]
})
export class AppModule { }


