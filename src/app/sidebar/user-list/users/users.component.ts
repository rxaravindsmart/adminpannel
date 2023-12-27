import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Active_state:any=[
    {title:'Design New UI Presentation',sub_title:'Dribble Website',message:'19',links:'4',Date:'05 Jun 2022',progress:'7',pro_state:'70%',flag:'false',src:'../assets/user.jpg',src_two:'../assets/prof.jpg',src_three:'../assets/user2.jpeg'},
    {title:'Testing  Presentation',sub_title:'Mustle Website',message:'32',links:'7',Date:'01 Dec 2022',progress:'3',pro_state:'30%',flag:'true'},
    {title:'Database Presentation',sub_title:'Microsoft Website',message:'7',links:'2',Date:'20 Nov 2022',progress:'6',pro_state:'60%',flag:'false',src:'../assets/user.jpg',src_two:'../assets/prof.jpg',src_three:'../assets/user2.jpeg'},
    {title:'System Process Presentation',sub_title:'Free-Pick-template',message:'12',links:'1',Date:'16 Jan 2022',progress:'2',pro_state:'20%',flag:'true'}
  ]
  progress_state:any=[
    {title:'Design New UI Presentation',sub_title:'Dribble Website',message:'19',links:'4',Date:'05 Jun 2022',progress:'4',pro_state:'40%',flag:'true'},
    {title:'Testing  Presentation',sub_title:'Mustle Website',message:'32',links:'7',Date:'01 Dec 2022',progress:'5',pro_state:'50%',flag:'false',src:'../assets/user.jpg',src_two:'../assets/prof.jpg',src_three:'../assets/user2.jpeg'},
    {title:'Database Presentation',sub_title:'Microsoft Website',message:'7',links:'2',Date:'20 Nov 2022',progress:'9',pro_state:'90%',flag:'true'},
    {title:'System Process Presentation',sub_title:'Free-Pick-template',message:'12',links:'1',Date:'16 Jan 2022',progress:'8',pro_state:'80%',flag:'false',src:'../assets/user.jpg',src_two:'../assets/prof.jpg',src_three:'../assets/user2.jpeg'}
  ]
  complete_state:any=[
    {title:'Testing  Presentation',sub_title:'Mustle Website',message:'32',links:'7',Date:'01 Dec 2022',progress:'10',pro_state:'100%',flag:'true'},
    {title:'Database Presentation',sub_title:'Microsoft Website',message:'7',links:'2',Date:'20 Nov 2022',progress:'10',pro_state:'100%',flag:'true'},
    {title:'System Process Presentation',sub_title:'Free-Pick-template',message:'12',links:'1',Date:'16 Jan 2022',progress:'10',pro_state:'100%',flag:'false',src:'../assets/user.jpg',src_two:'../assets/prof.jpg',src_three:'../assets/user2.jpeg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
