
//system
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components
import { BrochureComponent } from './brochure/brochure.component';
import { BookComponent } from './book/book.component';
import { PublicHouseComponent } from './public-house/public-house.component';
import { MagazineComponent } from './magazine/magazine.component';
import { AllLibraryComponent } from './all-library/all-library.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
    {
      path: 'library',
      children: [
        { path: 'brochure', component: BrochureComponent, data: { title: "Brochures" } },
        { path: 'book', component: BookComponent, data: { title: "Books" } },
        { path: 'magazine', component: MagazineComponent, data: { title: "Magazines" } },
        { path: 'publichouse', component: PublicHouseComponent, data: { title: "Publication Houses" } },
        { path: 'alllibrary', component: AllLibraryComponent, data: { title: "All Library" } },
        { path: 'author', component: AuthorComponent, data: { title: "Authors" } },
      ]
    }
  ];
  


@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ]
    ,
    exports: [
      RouterModule
    ]
  })
  export class LibraryRoutingModule {
  
  }