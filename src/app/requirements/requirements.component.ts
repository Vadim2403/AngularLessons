import { Component, OnInit } from '@angular/core';
import { Require } from "../requirements/requireModel";
@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  requires: Require[] = [
    new Require("Require 1", "promise and fetch"),
    new Require("Require 2", "list in HTML")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
