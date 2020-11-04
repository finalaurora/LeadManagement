import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadListComponent } from "./lead-list/lead-list.component";

const routes: Routes = [
  {
    path: "",
    component: LeadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
