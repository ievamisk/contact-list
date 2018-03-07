import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ManagementMenuComponent } from './management-menu/management-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contact.service';
import {HttpModule} from "@angular/http";
import { DropdownComponent } from './dropdown/dropdown.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManagementMenuComponent,
    FooterComponent,
    ProfileCardComponent,
    MainContainerComponent,
    ContactsComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
