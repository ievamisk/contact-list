import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit, OnChanges {
  @Input() displayedContact: any = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.displayedContact);
  }
}
