import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { RequirementEditComponent } from './requirements/requirement-edit/requirement-edit.component';
import { RequiremntItemComponent } from './requirements/requiremnt-item/requiremnt-item.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { FormsModule } from "@angular/forms";
import { RequireAddComponent } from './requirements/require-add/require-add.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { Page404Component } from './page404/page404.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequirementsComponent,
    EventsComponent,
    EventListComponent,
    EventDetailsComponent,
    EventItemComponent,
    RequirementEditComponent,
    RequiremntItemComponent,
    AddEventComponent,
    RequireAddComponent,
    EventStartComponent,
    Page404Component,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
