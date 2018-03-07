import {Component, OnInit, Output, EventEmitter, Pipe} from '@angular/core';
import { ContactService} from "../contact.service";
import 'rxjs/add/operator/map';
import {Subscriber} from "rxjs/Subscriber";
import {Subscription} from "rxjs/Subscription";
import {forEach} from "@angular/router/src/utils/collection";

// export type Contact = { id: number, name: string, surnamme: string, city: string, email: string, phone: string, active: boolean };

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
    private subscription: Subscription;
    private contacts: any = [];

    public sort = '';

    @Output() selectedContact: EventEmitter<any> = new EventEmitter<any>();

    constructor(private contactService: ContactService) {
        this.subscription = this.contactService.contacts$.subscribe((contacts) => {
            this.contacts = contacts;
            this.sort = null;
            if (contacts.length > 0) {
                this.select(0);
            }
        });

        this.contactService.getContacts();
    }

    ngOnInit() {
    }

    select(id) {
        this.selectedContact.emit(this.contacts[id]);
    }


    sortByName() {

        if (this.sort === null || this.sort === 'desc') {
            this.sort = 'asc';
        }
        else if (this.sort === 'asc') {
            this.sort = 'desc';
        }
        else {
            this.sort = '';
        }


        if (this.contacts.length > 0 ) {
            return this.contacts.sort((a, b) => {
                let x = a.name;
                let y = b.name;
                if (this.sort === 'asc') {
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }
                else if (this.sort === 'desc') {
                    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                }
            });
        }
    }


}
