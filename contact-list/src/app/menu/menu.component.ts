import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
    private displayMenu: Boolean = false;

    constructor() { }

  ngOnInit() {
  }

  toggleActivity() {
      this.displayMenu = !this.displayMenu;
  }

}
