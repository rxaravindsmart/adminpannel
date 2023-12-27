import { Component, OnInit } from '@angular/core';
import { HeaderbarService } from '../headerbar.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  title = 'My first AGM project';
  items:any=[]
  userDetails:any=[]
  lat: number = 51.673858;
  lng: number = 7.815982;
  id:any
  flag=false
  values:any
  constructor(private HeaderbarService:HeaderbarService) { }
  onclick(i:any){
    this.flag=true
    this.id=i
    const lat=this.userDetails[this.id].address.geolocation.lat
    const long=this.userDetails[this.id].address.geolocation.long
    const reverse = require('reverse-geocode')
    this.values=reverse.lookup(lat, long, 'us')
  }
  getItems(){
    this.HeaderbarService.getDelivery().subscribe( res=>{
      this.items=res;
    })
    this.HeaderbarService.getDeliveryUsers().subscribe(res =>{
      this.userDetails=res
    })
  }
  ngOnInit(): void {
    this.getItems()
  }

}
