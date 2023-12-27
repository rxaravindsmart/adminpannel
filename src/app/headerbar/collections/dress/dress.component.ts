import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  items:any=[]
  constructor(private CollectionService:CollectionService) { }
  getItems(){
    this.CollectionService.getMens().subscribe( res =>{
      this.items=res
    })
  }
  ngOnInit(): void {
    this.getItems()
  }

}
