import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  flag:any=true
  constructor(private Service:AppService) { }

  onUser(){
    this.Service.inDetail().subscribe(res=>{
      this.flag=res
    })
    this.flag=true
    this.Service.userListpage(this.flag)
  }
  ngOnInit(): void {
    this.onUser()
  }

}
