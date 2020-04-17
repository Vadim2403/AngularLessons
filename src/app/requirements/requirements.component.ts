import { Component, OnInit } from '@angular/core';
import { Require } from "../requirements/requireModel";
import { RequireService } from './require.service';
@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {


  temp: Require;
  constructor(private requireSelected: RequireService) { }
  requires: Require[];
  ngOnInit(): void {
    this.requireSelected.requireSelected.subscribe((require:Require) => {
      this.temp = require;
    })
    this.requires = this.requireSelected.getRequires();
    this.requireSelected.reqUpdate.subscribe((requires: Require[]) => {
      this.requires = requires;
    })
  }

}
