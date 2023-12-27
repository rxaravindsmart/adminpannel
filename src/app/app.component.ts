import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  back:any
  constructor(private Service:AppService){
  }
  title = 'Admin-Panel';
  getback(){
    this.Service.backGround().subscribe(res=>{
      this.back=res
      console.log(this.back);
    })
  }
  ngOnInit(): void {
    // this.getback()
  }
}
