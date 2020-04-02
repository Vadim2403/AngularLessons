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
    RequiremntItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
