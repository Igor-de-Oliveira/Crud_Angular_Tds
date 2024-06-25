import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocaisService } from '../services/locais.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.scss']
})
export class LocalFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fromeBuilder: FormBuilder,
    private service: LocaisService,
    private location: Location
  ) {
    this.form = this.fromeBuilder.group({
    local_End: [null],
    local_disp: [null],
    local_Cap: [null],
    local_Name: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this.onCancel();
  }

  onCancel(){
    this.location.back();
  }

}
