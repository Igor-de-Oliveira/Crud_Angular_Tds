import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LocaisRoutingModule } from './locais-routing.module';
import { LocaisComponent } from './Containers/locais/locais.component';
import { LocalFormComponent } from './Containers/local-form/local-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocaisListComponent } from './Components/locais-list/locais-list.component';


@NgModule({
  declarations: [
    LocaisComponent,
    LocalFormComponent,
    LocaisListComponent
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
