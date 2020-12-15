import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  clickCounter:number = 0;
  name: string = '';

  ngOnInit(): void {
  }

  counterClick(){
    return this.clickCounter += 1;
  }

}
