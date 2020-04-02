import { Component, OnInit, Input } from '@angular/core';
import {Require} from "../requireModel"
@Component({
  selector: 'app-requiremnt-item',
  templateUrl: './requiremnt-item.component.html',
  styleUrls: ['./requiremnt-item.component.css']
})
export class RequiremntItemComponent implements OnInit {

  @Input() require: Require; 
  constructor() { }

  ngOnInit(): void {
  }

}
