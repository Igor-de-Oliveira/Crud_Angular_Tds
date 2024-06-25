import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Local } from '../model/local';
import { LocaisService } from '../services/locais.service';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {

  locais$: Observable<Local[]>;
  displayedColumns = ['local_Name', 'local_Cap', 'local_End', 'local_disp'];

  constructor(
    private locaisService: LocaisService,
    public dialog: MatDialog
  ) {

    this.locais$ = this.locaisService.list()
    .pipe(
        catchError(error => {
          this.onError('Error ao caregar as localidades!')
          return of([])
        })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
