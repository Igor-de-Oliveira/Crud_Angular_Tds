import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LocaisRoutingModule } from './locais-routing.module';
import { LocaisComponent } from './locais/locais.component';


@NgModule({
  declarations: [
    LocaisComponent
  ],
  imports: [
    CommonModule,
    LocaisRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class LocaisModule { }
