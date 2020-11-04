import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadListComponent } from './lead-list/lead-list.component';
import { MatTableModule } from "@angular/material/table";
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadListComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
