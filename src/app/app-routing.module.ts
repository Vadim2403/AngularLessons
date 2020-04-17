import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Page404Component } from './page404/page404.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { RequireAddComponent } from './requirements/require-add/require-add.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

const routes: Routes = [
  {path: "", redirectTo: "/events", pathMatch: "full"},
  { 
    path: "events", 
    component: EventsComponent, 
    children:[
      {path:"", component: EventStartComponent},
      {path:":id", component: EventDetailsComponent}
  ]},
  { path: "addEvent", component: AddEventComponent},
  { path: "addReq", component: RequireAddComponent},
  { path: "eedit/:id", component: EditEventComponent},
  { path: "requirements", component: RequirementsComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
