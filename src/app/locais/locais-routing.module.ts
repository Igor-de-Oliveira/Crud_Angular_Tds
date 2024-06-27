import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocaisComponent } from './Containers/locais/locais.component';
import { LocalFormComponent } from './Containers/local-form/local-form.component';
import { LocalResolver } from './guards/local.resolver';

const routes: Routes = [
  { path: '', component: LocaisComponent },
  { path: 'new', component: LocalFormComponent, resolve: { local: LocalResolver } },
  { path: 'edit/:id', component: LocalFormComponent, resolve: { local: LocalResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocaisRoutingModule { }
