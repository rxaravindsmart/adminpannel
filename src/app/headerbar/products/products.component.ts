// import { NgStyle } from '@angular/common';
import { Component,  OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../app.service';
import { HeaderbarService } from '../headerbar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public popup=false
  public Products:any
  background= '#red'
  height:any
  width:any
  opacity:any
  index:any
  item:any
  display_item='none'
  add_display_item='none'
  constructor(private headerbarService:HeaderbarService,private Service:AppService) { }
  editItem(index:any){
    this.display_item='block'
    // this.item='Edit'
  }
  addItem(){
    this.add_display_item='block'
    // this.item='Add'
  }
  onSubmit(){
    this.display_item='none'
  }
  cancel(){
    this.display_item='none'
  }
  submit(form:NgForm){
    console.log(form.value);
  }
  removeItem(index:any){
    this.Products.splice(index,1)
  }
  getProducts(){
  // this.Products=  this.Service.getProducts()
  this.headerbarService.getProducts().subscribe(res =>{
    this.Products=res
    // console.log(this.Products);

  })
   }
  ngOnInit(): void {
    this.getProducts()
  }

}
