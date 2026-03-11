import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared-module';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { profilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SharedModule
  ],
  declarations: [profilePage]
})
export class ProfilePageModule {}
