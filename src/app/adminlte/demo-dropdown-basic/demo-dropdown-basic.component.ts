import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-dropdown-basic',
  templateUrl: './demo-dropdown-basic.component.html',
  styleUrls: ['./demo-dropdown-basic.component.css']
})
export class DemoDropdownBasicComponent implements OnInit {
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  constructor() { }

  ngOnInit() {
  }

}
