
//system
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//kendo ui
import { GridModule} from '@progress/kendo-angular-grid';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

//services
import { BrochureService } from './services/brochure.service';
import { MagazineService } from './services/magazine.service';
import { BookService } from './services/book.service';
import { PublicHouseService } from './services/public-house.service';
import { AllLibraryService } from './services/all-library.service';
import { AuthorService } from './services/author.service';

//components
import { BrochureComponent } from './brochure/brochure.component';
//import { LibraryRoutingModule } from './library.routing';
import { BookComponent } from './book/book.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PublicHouseComponent } from './public-house/public-house.component';
import { AllLibraryComponent } from './all-library/all-library.component';
import { AuthorComponent } from './author/author.component';
import { libraryRouter } from './library.rout';



@NgModule({

  imports: [
    CommonModule,
    //LibraryRoutingModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    ButtonsModule,
    DropDownsModule,
    //BrowserAnimationsModule,
    [libraryRouter]
  ],

  declarations: [
    BrochureComponent,
    BookComponent,
    MagazineComponent,
    PublicHouseComponent,
    AllLibraryComponent,
    AuthorComponent
  ],

  providers: [
    BrochureService,
    MagazineService,
    BookService,
    PublicHouseService,
    AllLibraryService,
    AuthorService
  ]
})
export class LibraryModule { }
