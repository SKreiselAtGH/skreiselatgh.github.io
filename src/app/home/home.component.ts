import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  devName = "Name";
  aboutMe = "Write some information about yourself here."

  constructor() { }

  ngOnInit(): void {
  }

}
