import { Component, OnInit } from '@angular/core';
import {Dummy} from './../entity';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  model:any;
show(r){
  console.log(r)
      console.log(r.value);
}

  
  constructor() {
    this.model = new Dummy();
   }

  ngOnInit(){
  }

}
