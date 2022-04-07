import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home.component';
import { ContactMessagesComponent } from './components/contact-messages/contact-messages.component';
import { SubscribesComponent } from './components/subscribes/subscribes.component';

@NgModule({
  declarations: [HomeComponent, ContactMessagesComponent, SubscribesComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
