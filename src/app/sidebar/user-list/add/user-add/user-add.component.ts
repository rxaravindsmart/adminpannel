import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  rows:any=[
    {id:1}
  ]
  detail:any='none'
  Userlist:any=[
    {src:'../assets/user.jpg',name:'Carmen Beltrain',lname:'Carmen.Bel',pro1:'Search',pro2:'2 more...',role1:'Designer',role2:'Designer',status2:'In Work',status1:'none',date:'20.02.2022',datejoin:'07.02.2022 11.00',flag:'true',flag2:'false',enable:'false',action:'false'},
    {src:'../assets/team/member1.jpg',name:'Jube Bowman',lname:'Bowman.Jude',role1:'Front-end',status1:'In Work',date:'20.02.2022',flag:'false',flag2:'false',enable:'false',action:'false'},
    {src:'../assets/team/member2.jpg',name:'Darius Cummings',lname:'DarCum',pro1:'GrassMax',pro2:'2 more...',role1:'Manager',role2:'Top-Manager',status2:'In Work',status1:'none',date:'20.02.2022',datejoin:'07.02.2022',flag:'true',flag2:'false',enable:'true',action:'false'},
    {src:'../assets/user2.jpeg',name:'Mo Chum',lname:'Admin76',pro1:'GrassMax',pro2:'Mental',role1:'Designer',role2:'Designer',role3:'Illustrator',status2:'In Work',status3:'none',status1:'Oncheck',date:'07.02.2022 11.00',datejoin:'08.02.2022 11.00',datej:'14.02.2022',flag:'true',flag2:'true',enable:'false',action:'false'}
  ]
  display_item:any='none'
  constructor(private Service:AppService) { }
  cancel(){
    this.display_item='none'
  }
  onSubmit(){

  }
  onDetail(){
    this.Service.inUserlist().subscribe(res=>{
      this.detail=res
    })
    this.detail=false
    this.Service.detailPage(this.detail)
  }
  action(id:any){
    this.Userlist[id].action=true
  }
  editItem(){
    this.display_item='block'
  }

  addrow(){
    var id
    for(let i=0;i<=this.rows.length;i++){
       id={id:i}
    }
    this.rows.push(id)
  }
  deleteItem(i:any){
    this.Userlist.splice(i,1)
  }

  ngOnInit(): void {
    this.onDetail()
  }

}
