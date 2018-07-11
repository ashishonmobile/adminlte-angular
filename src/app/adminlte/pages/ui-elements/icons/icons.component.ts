import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  tab = 'fa-icons';
  constructor() { }

  ngOnInit() {
  }

  onTabSelected(tabName: string) {
    console.log(tabName);
    this.tab = tabName;
  }

}
