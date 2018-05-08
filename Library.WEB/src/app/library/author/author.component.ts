import { AuthorService } from './../services/author.service';
import { Author } from './../models/author.model';

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Button } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  providers: [AuthorService]
})
export class AuthorComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  editedAuthor: Author;
  private editedRowIndex: number;
  authorService: AuthorService;

  constructor( @Inject(AuthorService) bookServiceFactory: any, ) {
    this.authorService = bookServiceFactory;
  }

  public ngOnInit(): void {
    this.view = this.authorService.pipe(map(data => process(data, this.gridState)));
    this.authorService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log(this.gridState);
    this.authorService.read();
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);
    var newAuthor = new Author();
    sender.addRow(newAuthor);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    this.editedAuthor = Object.assign({}, dataItem);
    console.log(sender);
    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.authorService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedAuthor = undefined;
  }

  public removeHandler({ dataItem }) {
    this.authorService.remove(dataItem);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.authorService.resetItem(this.editedAuthor);
    this.editedRowIndex = undefined;
    this.editedAuthor = undefined;
  }
}
