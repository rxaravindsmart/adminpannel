import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  back:any

  constructor(private route:ActivatedRoute,private router:Router,private Service:AppService) { }
  dashboard(){
    // this.router.navigate(['dashboard'],{relativeTo:this.route})
  }
  products(){
    // this.router.navigate(['products'],{relativeTo:this.route})
  }
  plugins(){
    // this.router.navigate(['plugins'],{relativeTo:this.route})
  }
  collection(){
    // this.router.navigate(['collection'],{relativeTo:this.route})
  }
  order(){
    // this.router.navigate(['order'],{relativeTo:this.route})
  }
  delivery(){
    // this.router.navigate(['delivery'],{relativeTo:this.route})
  }
  getback(){
    this.Service.backGround().subscribe(res=>{
      this.back=res
    })
  }
  ngOnInit(): void {
    // this.dashboard()
    this.getback()
    this.products()
  }

}
