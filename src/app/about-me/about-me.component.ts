import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  me = {
    img: 'me.jpg',
    name: 'Emily Dodds',
    linkedin: 'https://www.linkedin.com/in/emilydodds',
    description: "",
    email: 'mumanity@gmail.com'
  }
  constructor() { }

  ngOnInit() {
  }

}
