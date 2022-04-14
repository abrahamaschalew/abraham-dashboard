import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

import { HomeComponent } from './home.component';
import { ContactMessagesComponent } from './components/contact-messages/contact-messages.component';
import { SubscribesComponent } from './components/subscribes/subscribes.component';

import { EmailGrowthComponent } from './components/email-growth/email-growth.component';
import { ReadEmailComponent } from './components/read-email/read-email.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactMessagesComponent,
    SubscribesComponent,
    EmailGrowthComponent,
    ReadEmailComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, CoreModule],
})
export class HomeModule {}
