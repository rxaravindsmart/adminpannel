import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  items:any=[]
  constructor(private CollectionService:CollectionService) { }
  getElectronics(){
    this.CollectionService.getElectronic().subscribe( res=>{
      this.items=res
    })
  }
  ngOnInit(): void {
    this.getElectronics()
  }

}
