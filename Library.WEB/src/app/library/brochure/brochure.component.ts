import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrochureService } from './brochure.service';
import { Brochure } from './brochure.model';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Button } from "@progress/kendo-angular-buttons";


@Component({
  templateUrl: './brochure.component.html',
  providers: [BrochureService],
  styleUrls: []
})
export class BrochureComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  editedBrochure: Brochure;
  private editedRowIndex: number;
  brochureService: BrochureService;

  constructor( @Inject(BrochureService) bookServiceFactory: any, ) {
    this.brochureService = bookServiceFactory;
  }

  public ngOnInit(): void {
    this.view = this.brochureService.pipe(map(data => process(data, this.gridState)));
    this.brochureService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log(this.gridState);
    this.brochureService.read();
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);
    var newBrochure = new Brochure();
    sender.addRow(newBrochure);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    this.editedBrochure = Object.assign({}, dataItem);
    console.log(sender);
    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.brochureService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedBrochure = undefined;
  }

  public removeHandler({ dataItem }) {
    this.brochureService.remove(dataItem);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.brochureService.resetItem(this.editedBrochure);
    this.editedRowIndex = undefined;
    this.editedBrochure = undefined;
  }
}