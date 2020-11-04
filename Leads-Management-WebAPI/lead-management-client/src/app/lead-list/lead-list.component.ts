import { Component, OnInit } from '@angular/core';
import { leads } from "../lead-sample-data";

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.sass']
})
export class LeadListComponent implements OnInit {
  data = leads;
  displayedColumns = ["name","email","phone","source","status"];
  constructor() { }

  ngOnInit(): void {
  }

}
