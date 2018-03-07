///<reference path="../../node_modules/@angular/http/src/static_response.d.ts"/>
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {hasOwnProperty} from "tslint/lib/utils";


@Injectable()
export class ContactService {
    private contactsChanged: BehaviorSubject<any> =  new BehaviorSubject<any>([]);
    public contacts$ = this.contactsChanged.asObservable();

    private citiesChanged: BehaviorSubject<any> =  new BehaviorSubject<any>([]);
    public cities$ = this.citiesChanged.asObservable();

    private filteredContacts: any = [];
    private allContacts: any = [];

    constructor(private http: Http) {
    }

    getContacts() {
        let contacts = 'assets/data/contacts.json';
        //pasiemamas contacts failas, gaunamas jo response ir paverciamas i json | subscribe sulaukia response
        return this.http.get(contacts).map((response: Response) => response.json()).subscribe((response) => {
            this.allContacts = response;
            this.filterCities();
            this.contactsChanged.next(response); //behavioursubject, kuris su next funkcija pakeicia jo verte ir perduoda kitiem, kad jis pasikeite
        });
    }

    filterCities() {
        let cities = [];

        if (this.allContacts.length > 0) {
            this.allContacts.forEach((item, index) => {
                if (cities.indexOf(item.city) < 0) {
                    cities.push(item.city);
                }
                if (index === this.allContacts.length - 1) {
                    this.citiesChanged.next(cities);
                }
            });
        }
    }

    filterContacts(name, active, city) {
        this.filteredContacts = [];
        console.log(name, active, city);

        if (this.allContacts.length > 0) {
            this.allContacts.forEach((contact, index) => {
                if ((contact.hasOwnProperty('active') && contact.active === active) || (!contact.hasOwnProperty('active') && !active)) {
                    if (name !== '' && city !== '') {
                        if (contact.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 && contact.city === city) {
                            this.filteredContacts.push(contact);
                        }
                    }
                    else if (name !== '' && city === '') {
                        if (contact.name.toLowerCase().indexOf(name.toLowerCase()) >= 0) {
                            this.filteredContacts.push(contact);
                        }
                    }
                    else if (city !== '' && name == '') {
                        if (contact.city === city) {
                            this.filteredContacts.push(contact);
                        }
                    }
                    else {
                        this.filteredContacts.push(contact);
                    }
                }

                if (this.allContacts.length - 1 === index) {
                    this.contactsChanged.next(this.filteredContacts);
                }
            });
        }
    }
}

