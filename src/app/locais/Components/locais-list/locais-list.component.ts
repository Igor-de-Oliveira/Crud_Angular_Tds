import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Local } from '../../model/local';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-locais-list',
  templateUrl: './locais-list.component.html',
  styleUrls: ['./locais-list.component.scss']
})
export class LocaisListComponent implements OnInit {

  @Input() locais: Local[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);


  readonly displayedColumns = ['local_Name', 'local_Cap', 'local_End', 'local_disp', 'Alugar', 'actions'];


  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(local: Local){
    this.edit.emit(local);
  }

  onDelete(local: Local){
    this.delete.emit(local);
  }

  onEvent(local: Local){

  }

}
