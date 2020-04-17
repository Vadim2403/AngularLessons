import { Injectable, EventEmitter } from '@angular/core';
import { Require } from "./requireModel"
@Injectable({
  providedIn: 'root'
})
export class RequireService {

  requireSelected = new EventEmitter<Require>();
  reqUpdate = new EventEmitter<Require[]>();
  requires: Require[] = [
    new Require("Require 1", "promise and fetch"),
    new Require("Require 2", "list in HTML")
  ]
  getRequires(): Require[]{
    return this.requires.slice();
}
  addNewReq(item: Require){
    this.requires.push(item);
    this.reqUpdate.emit(this.requires);
  }
  deleteReq(item : Require){
    var id = this.requires.indexOf(item);
    if(id != null){
      this.requires.splice(id, 1);
      this.reqUpdate.emit(this.requires);
    }
  }
  constructor() { }
}
