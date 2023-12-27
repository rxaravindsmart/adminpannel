import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  back:any
  constructor(private Service :AppService) { }
  getColor(){
    this.Service.backGround().subscribe(item=>{
      this.back=item
    })
  }
  ngOnInit(): void {
  }

}
