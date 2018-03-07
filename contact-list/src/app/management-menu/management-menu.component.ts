import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-management-menu',
  templateUrl: './management-menu.component.html',
  styleUrls: ['./management-menu.component.less']
})
export class ManagementMenuComponent implements OnInit {
    private isActive: Boolean = false;
    private subscription: Subscription;
    private selectedCity = "";

    private name: String = "";
    private cities: any = [];

    constructor(private contactService: ContactService) {
        this.subscription = this.contactService.cities$.subscribe((cities) => {
            this.cities = cities;
        });
    }

    ngOnInit() {

    }

    filterItems() {
        console.log(this.name, this.isActive, this.selectedCity);
        this.contactService.filterContacts(this.name, this.isActive, this.selectedCity);
    }

    toggleActivity() {
        this.isActive = !this.isActive;
    }
}
