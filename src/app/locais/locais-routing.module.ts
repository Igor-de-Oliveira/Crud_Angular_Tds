import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocaisComponent } from './locais/locais.component';
import { LocalFormComponent } from './local-form/local-form.component';

const routes: Routes = [
  { path: '', component: LocaisComponent },
  { path: 'new', component: LocalFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocaisRoutingModule { }
