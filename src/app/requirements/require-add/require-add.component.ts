import { Component, OnInit } from '@angular/core';
import { RequireService } from '../require.service';
import { Require } from '../requireModel';

@Component({
  selector: 'app-require-add',
  templateUrl: './require-add.component.html',
  styleUrls: ['./require-add.component.css']
})
export class RequireAddComponent implements OnInit {

  constructor(private requireService: RequireService) { }
  mytitle: string;
  mydescription: string;
  ngOnInit(): void {
  }
  addReq(){

    this.requireService.addNewReq(new Require(this.mytitle,this.mydescription));
  }
}
