import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ILeadItem } from '../lead';
import { LeadDataService } from '../lead-data.service';
import { LeadTableDataSource } from './lead-table-datasource';

@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.css']
})
export class LeadTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ILeadItem>;
  dataSource: LeadTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone', 'source', 'status'];

  constructor(private dataSvc: LeadDataService) {

  }
  ngOnInit() {
    this.dataSource = new LeadTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.dataSvc.responseData;
    this.table.dataSource = this.dataSource;
  }
}
