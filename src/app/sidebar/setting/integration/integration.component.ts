import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit {
  public Application:any=[
    {src: '../assets/inter/figma.png', title: 'Figma'},
    {src: '../assets/inter/git.png', title: 'Git Hub'},
    {src: '../assets/inter/gmail.png', title: 'Gmail'},
    {src: '../assets/inter/insta.png', title: 'Instagram'},
    {src: '../assets/inter/office.png', title: 'Office'},
    {src: '../assets/inter/zap.png', title: 'Zapier'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
