import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  items:any=[]
  users:any=[]
  lat:any
  long:any
  address:any=[]
  values:any=[]
  array:any=[]
  listitems:any=[]
  constructor(private OrderService:OrderService) { }
  getItems(){
    this.OrderService.getAllorder().subscribe(res=>{
      this.items=res
    this.OrderService.getAllorderUsers().subscribe(res =>{
      this.users=res
      for(let i=0;i<this.users.length;i++){
        const lat=this.users[i].address.geolocation.lat
    const long=this.users[i].address.geolocation.long
    const reverse = require('reverse-geocode')
    this.values.push(reverse.lookup(lat, long, 'us'))
      }
      this.array= this.items.map((item:any, i:any) => Object.assign({}, item, this.values[i]));
      this.listitems=this.items.map((item:any, i:any) => Object.assign({}, item, this.users[i]));
    })
    })
  }
  ngOnInit(): void {
    this.getItems()
  }

}
