import { Component, OnInit, Input } from '@angular/core';
import { Event } from "../eventModel"
import { EventService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventDetail:Event;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }
  index: number;
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.index = params["id"];
      this.eventDetail = this.eventService.getSingleEvent(this.index);
    }
    )

  }

}
