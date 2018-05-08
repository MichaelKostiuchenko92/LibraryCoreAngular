import { PublicHouse } from './../models/public-house.model';
import { PublicHouseService } from './../services/public-house.service';

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Button } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-publichouse',
  templateUrl: './public-house.component.html',
  providers: [PublicHouseService]
})
export class PublicHouseComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  editedPublicHouse: PublicHouse;
  private editedRowIndex: number;
  publicHouseService: PublicHouseService;

  constructor( @Inject(PublicHouseService) bookServiceFactory: any, ) {
    this.publicHouseService = bookServiceFactory;
  }

  public ngOnInit(): void {
    this.view = this.publicHouseService.pipe(map(data => process(data, this.gridState)));
    this.publicHouseService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log(this.gridState);
    this.publicHouseService.read();
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);
    var newPublicHouse = new PublicHouse();
    sender.addRow(newPublicHouse);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    this.editedPublicHouse = Object.assign({}, dataItem);
    console.log(sender);
    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.publicHouseService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedPublicHouse = undefined;
  }

  public removeHandler({ dataItem }) {
    this.publicHouseService.remove(dataItem);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.publicHouseService.resetItem(this.editedPublicHouse);
    this.editedRowIndex = undefined;
    this.editedPublicHouse = undefined;
  }
}
