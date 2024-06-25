import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LocaisRoutingModule } from './locais-routing.module';
import { LocaisComponent } from './locais/locais.component';
import { LocalFormComponent } from './local-form/local-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocaisComponent,
    LocalFormComponent
  ],
  imports: [
    CommonModule,
    LocaisRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LocaisModule { }
