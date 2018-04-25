

//system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditService } from './home/edit.service';


//kendo
import { GridModule } from '@progress/kendo-angular-grid';

//modules
import { LibraryModule } from './library/library.module';

//components
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing.module';



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
    RouterModule,
    LibraryModule,
    FormsModule,
    GridModule
  ],
  providers: [
    {
    deps: [HttpClient],
    provide: EditService,
    useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
}],
  bootstrap: [AppComponent]
})
export class AppModule { }


