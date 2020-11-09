import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadListComponent } from "./lead-list/lead-list.component";
import { LeadEditFormComponent } from "./lead-edit-form/lead-edit-form.component";

const routes: Routes = [
  {
    path: "",
    component: LeadListComponent
  },
  {
    path:"edit",
    component: LeadEditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
