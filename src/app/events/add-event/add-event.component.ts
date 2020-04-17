import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from "../eventModel"
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  myname: string;
  mydescription: string;
  myimg: string;
    
  ngOnInit(): void {
  }

  addEvent(){

    this.eventService.addNewEvent(new Event(this.myname,this.mydescription,this.myimg));
  }
}
