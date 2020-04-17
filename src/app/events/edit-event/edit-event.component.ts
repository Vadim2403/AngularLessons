import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../eventModel';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  item: Event;
  constructor(private eventService: EventService,private route: ActivatedRoute) { }
  index: number;
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.index = params["id"];
      this.item = this.eventService.getSingleEvent(this.index);
  })
  }
  editEv(): void {
    console.log(this.item);
  }
}
