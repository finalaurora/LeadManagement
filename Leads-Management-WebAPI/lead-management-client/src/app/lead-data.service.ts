import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ILeadItem, LeadItemJSON , LeadItem} from './lead';

@Injectable({
  providedIn: 'root'
})
export class LeadDataService {
  responseData :LeadItem[]= [];
  constructor(private http:HttpClient) { }

  getData(): LeadItem[]
  {
    this.http.get<LeadItemJSON[]>("https://localhost:44347/api/leads").subscribe(
      data => {
        console.log("Data from GET request\n",data);
        try{
          this.responseData = LeadDataService.convertLeadfromItemJSON(data);
          }
          catch(error)
          {
            console.log(error);
            console.log("GET Request failed")
            return [];
          }
      }
    );
    return this.responseData;
  }

  static convertLeadfromItemJSON(itemJson: LeadItemJSON[]):LeadItem[] {
    let leaditems :LeadItem[] = [];
    itemJson.forEach(element => {
      leaditems.push(LeadItem.fromItemJson(element));
    });
    console.log(leaditems);
    return leaditems;
  }
}
