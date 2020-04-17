import { Component, OnInit, Input } from '@angular/core';
import {Require} from "../requireModel"
import { RequireService } from '../require.service';
@Component({
  selector: 'app-requiremnt-item',
  templateUrl: './requiremnt-item.component.html',
  styleUrls: ['./requiremnt-item.component.css']
})
export class RequiremntItemComponent implements OnInit {

  @Input() require: Require; 
  constructor(private requireService: RequireService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.requireService.requireSelected.emit(this.require);
  }
  delReq(){
    this.requireService.deleteReq(this.require);
  }
}
