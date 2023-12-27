import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  items:any=[]

  constructor(private CollectionService:CollectionService) { }
  getMens(){
    this.CollectionService.getMens().subscribe(res=>{
      this.items=res
    })
  }
  ngOnInit(): void {
    this.getMens()
  }

}
