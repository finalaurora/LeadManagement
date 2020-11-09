import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { leads } from "../lead-sample-data";
import {FormGroup, FormControl} from '@angular/forms';
import { LeadDataService } from '../lead-data.service';
import { ILeadItem, LeadItem } from '../lead';
import { LeadTableComponent } from '../lead-table/lead-table.component';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.sass']
})
export class LeadListComponent implements OnInit, AfterViewInit {
  data;
  @ViewChild(LeadTableComponent)
  private table : LeadTableComponent;

  displayedColumns = ["name","email","phone","source","status"];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(private dataSvc: LeadDataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }
  async fetchData()
  {
    this.table.table.dataSource = await this.dataSvc.getData();
  }

  filter(){
    alert("Filter Data");
  }
}
