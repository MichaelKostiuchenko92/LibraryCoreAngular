import { PublicHouseService } from './../public-house/public-house.service';
import { PublicHouse } from './../public-house/public-house.model';
import { Book } from './book.model';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { resetFakeAsyncZone, fakeAsync } from '@angular/core/testing';


import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { SelectableSettings } from '@progress/kendo-angular-grid/dist/es2015/selection/selectable-settings';
import { Button } from "@progress/kendo-angular-buttons";


@Component({
  templateUrl: './book.component.html',
  providers: [BookService],
  styleUrls: []
})
export class BookComponent implements OnInit {
  editedBook: Book;   
  public view: Observable<GridDataResult>;         
  loaded: boolean = true;
  jsonBackUpText: string;
  selectedIds: number[] = Array<number>();
  bookService: BookService;
  public publicHouseList: PublicHouse[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  public selectableSettings: SelectableSettings = {
    checkboxOnly: false,
    mode: 'multiple'
  };

  private editedRowIndex: number;

  constructor( @Inject(BookService) bookServiceFactory: any, ) {
    this.bookService = bookServiceFactory;
  }

  public ngOnInit(): void {
    this.view = this.bookService.pipe(map(data => process(data, this.gridState)));
    this.bookService.getPublicHouseList().subscribe(data => {
      this.publicHouseList = data;
    });
    this.bookService.read();

  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log(this.gridState);
    this.bookService.read();
  }
  public selectionChange(event: SelectionEvent) {
    event.selectedRows.forEach(e => this.selectedIds.push(e.dataItem.bookId));
    event.deselectedRows.forEach(e => this.selectedIds = this.selectedIds.filter(item => item != e.dataItem.bookId));
    console.log(this.selectedIds);
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);
    var newBook = new Book();
    sender.addRow(newBook);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    this.editedBook = Object.assign({}, dataItem);
    console.log(sender);
    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.bookService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedBook = undefined;
  }

  public removeHandler({ dataItem }) {
    this.bookService.remove(dataItem);
  }
  public multiselectValueChange() {
    
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.bookService.resetItem(this.editedBook);
    this.editedRowIndex = undefined;
    this.editedBook = undefined;
  }
}