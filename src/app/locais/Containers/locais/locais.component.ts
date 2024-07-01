import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { Local } from './../../model/local';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { LocaisService } from '../../services/locais.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {

  locais$: Observable<Local[]> | null = null;
  constructor(
    private locaisService: LocaisService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.refresh();

  }

  refresh() {
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

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(local: Local) {
    this.router.navigate(['edit', local.id_Local], {relativeTo: this.route});
  }

  onDelete(local: Local) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que quer remover o curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result){
        this.locaisService.remove(local.id_Local).subscribe(
          () => {
            this.refresh();
          }
        )
      }
    });
  }

}
