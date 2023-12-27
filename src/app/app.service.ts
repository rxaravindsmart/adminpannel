import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Products } from './app.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  back:any
  backtrack:any
   products:Products[] =[
    {image:'../assets/Products/hair.jpg',title:'Shampoo',name: 'Loreal',price:'008.00',catagory:'Cosmetics'},
    {image:'./assets/Products/ear.jpg',title:'Ear Ring',name:'Thangamaligai',price:'098.00',catagory:'Cosmetics'},
    {image:'./assets/Products/eye.jpg',title:'Eyeliner',name: 'Jaqline USA',price:'008.50',catagory:'Cosmetics'},
    {image:'./assets/Products/lip.jpg',title:'Lip balm',name: 'Vaadi Herbals',price:'006.20',catagory:'Cosmetics'},
    {image:'./assets/Products/teeth.jpg',title:'Teeth Cleaner',name:'Colgate',price:'002.99',catagory:'Cosmetics'},
    {image:'./assets/Products/neck.jpg',title:'Nechlace',name: 'Daniel Wel',price:'121.00',catagory:'Cosmetics'},
    {image:'./assets/Products/kaapu.jpeg',title:'Bracelet',name: 'Aadhi Chakra',price:'111.00',catagory:'Cosmetics'}
  ]
  private message = new BehaviorSubject('First Message');
  private sub = new Subject();
  private detailSub=new Subject()
  private usersub=new Subject()
  constructor() { }
  getProducts(){
    return this.products
  }
  editItem(index:any){
   const item= this.products[index]
   return item;
  }
  backDrop(back:any){
  return this.sub.next(back)
  }
  backGround():Observable<any>{
    return this.sub.asObservable()
  }
  detailPage(dItem:any){
    return this.detailSub.next(dItem)
  }
  inDetail():Observable<any>{
    return this.detailSub.asObservable()
  }
  userListpage(dItem:any){
    return this.usersub.next(dItem)
  }
  inUserlist():Observable<any>{
    return this.usersub.asObservable()
  }

}
