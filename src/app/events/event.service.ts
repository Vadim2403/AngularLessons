import { Injectable,EventEmitter } from '@angular/core';
import { Event } from "./eventModel";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSelected = new EventEmitter<Event>();
  eventUpdate = new EventEmitter<Event[]>();
    private events: Event[] = [
    new Event("Course JS", "promise and fetch", "https://i.ytimg.com/vi/IHjzyhjKxtc/maxresdefault.jpg"),
    new Event("HTML CSS", "list in HTML", "https://o7planning.org/ru/11983/cache/images/i/21723546.png"),
    new Event("React", "work with routing components","https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e"),
  ]

  getEvents(): Event[]{
      return this.events.slice();
  }

  addNewEvent(item: Event){
    this.events.push(item);
    this.eventUpdate.emit(this.events);
  }
  deleteEvent(item: Event){
    var id = this.events.indexOf(item);
    if(id != null){
      this.events.splice(id, 1);
      this.eventUpdate.emit(this.events);
    }
  }
  getSingleEvent(index:number): Event{
    return this.events[index];
  }
  editSingleEvent(index:number, item:Event): void{
    this.events[index] = item;
    this.eventUpdate.subscribe(this.events); 
  }
  constructor() { }
}
