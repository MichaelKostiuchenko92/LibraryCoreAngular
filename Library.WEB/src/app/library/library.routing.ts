

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
import { AuthGuard } from './../auth/auth.guard';

const routes: Routes = [
    {
      path: 'library',
      children: [
        { path: 'brochure', component: BrochureComponent, canActivate: [AuthGuard], data: { title: "Brochures" } },
        { path: 'book', component: BookComponent, canActivate: [AuthGuard],  data: { title: "Books" } },
        { path: 'magazine', component: MagazineComponent, canActivate: [AuthGuard], data: { title: "Magazines" } },
        { path: 'publichouse', component: PublicHouseComponent, canActivate: [AuthGuard],  data: { title: "Publication Houses" } },
        { path: 'alllibrary', component: AllLibraryComponent, canActivate: [AuthGuard], data: { title: "All Library" } },
        { path: 'author', component: AuthorComponent, canActivate: [AuthGuard], data: { title: "Authors" } },
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
    ],
    providers: [AuthGuard]
  })
  export class LibraryRoutingModule {
  
  }