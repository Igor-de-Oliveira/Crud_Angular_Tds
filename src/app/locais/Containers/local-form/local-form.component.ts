import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { LocaisService } from '../../services/locais.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Local } from '../../model/local';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.scss']
})
export class LocalFormComponent implements OnInit {

  form = this.fromeBuilder.group({
    id_Local: [0],
    local_End: [''],
    local_disp: [''],
    local_Cap: [0],
    local_Name: ['']
    });;

  constructor(
    private fromeBuilder: NonNullableFormBuilder,
    private service: LocaisService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    //this.form
  }

  ngOnInit(): void {
    const local: Local = this.route.snapshot.data['local'];
    this.form.setValue({
      id_Local: local.id_Local,
      local_End: local.local_End,
      local_disp: local.local_disp,
      local_Cap: local.local_Cap,
      local_Name: local.local_Name}
    )
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this.onCancel();
  }

  onCancel(){
    this.location.back();
  }

}
