import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { LocaisService } from '../../services/locais.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Local } from '../../model/local';
import { Evento } from '../../model/evento';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.scss']
})
export class LocalFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LocaisService,
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const local: Local = this.route.snapshot.data['local'];
    this.form = this.formBuilder.group({
      id_Local: [local.id_Local],
      local_End: [local.local_End],
      local_disp: [local.local_disp],
      local_Cap: [local.local_Cap],
      local_Name: [local.local_Name],
      eventos: this.formBuilder.array(this.retrieveEvento(local))
    });
    console.log(this.form);
    console.log(this.form.value);
  }

  private retrieveEvento(local: Local): FormGroup[] {
    const eventos = [];
    if (local?.eventos) {
      local.eventos.forEach(evento => eventos.push(this.createEvento(evento)));
    } else {
      eventos.push(this.createEvento());
    }

    return eventos;
  }

  private createEvento(evento: Evento = { id_Evento: 0, evento_D_H: new Date(), evento_Dur: 0, evento_Num_Conv: 0, id_Local: 0 }, local: Local = this.route.snapshot.data['local']): FormGroup {
    return this.formBuilder.group({
      id_Evento: [evento.id_Evento],
      evento_D_H: [this.formatDate(evento.evento_D_H)],
      evento_Dur: [evento.evento_Dur],
      evento_Num_Conv: [evento.evento_Num_Conv],
      id_Local: [local.id_Local]
    });
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  getEventosFromArray(): FormArray {
    return this.form.get('eventos') as FormArray;
  }

  addNew(): void {
    const eventos = this.form.get('eventos') as FormArray;
    eventos.push(this.createEvento());
  }

  removeEvento(index: number): void {
    const eventos = this.form.get('eventos') as FormArray;
    eventos.removeAt(index);
  }

  onSubmit(): void {
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this.onCancel();
  }

  onCancel(): void {
    this.location.back();
  }
}

