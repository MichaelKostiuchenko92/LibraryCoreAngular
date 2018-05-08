import { AllLibrary } from './../models/all-library.model';
import { AllLibraryService } from './../services/all-library.service';

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Button } from "@progress/kendo-angular-buttons";


@Component({
  templateUrl: './all-library.component.html',
  providers: [AllLibraryService],
  styleUrls: []
})
export class AllLibraryComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 12
  };

  allLibraryService: AllLibraryService;

  constructor( @Inject(AllLibraryService) bookServiceFactory: any, ) {
    this.allLibraryService = bookServiceFactory;
  }

  public ngOnInit(): void {
    this.view = this.allLibraryService.pipe(map(data => process(data, this.gridState)));
    this.allLibraryService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log(this.gridState);
    this.allLibraryService.read();
  }
}