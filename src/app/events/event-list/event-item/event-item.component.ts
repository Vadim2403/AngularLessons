import { Component, OnInit, Input } from '@angular/core';
import {Event} from "../../eventModel"
import { EventService } from "../../event.service"
import { ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event; 
  @Input() index: number;
  item:Event;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }
  link:string;
  ngOnInit(): void {
    this.link = "/eedit/" + this.index.toString();
  }
  removeObj(){
    this.eventService.deleteEvent(this.event);
  }
  sendItem(){
    this.route.params.subscribe((params:Params) => {
      this.index = params["id"];
      this.item = this.eventService.getSingleEvent(this.index);
    })

  }

}
