import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.less']
})
export class MainContainerComponent implements OnInit {
  private selected: any = null;

  constructor() { }

  ngOnInit() {
  }

  selectingContact(event) {
    this.selected = event;
  }

}
