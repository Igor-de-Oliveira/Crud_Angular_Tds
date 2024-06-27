import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocaisService } from '../services/locais.service';
import { Local } from '../model/local';

@Injectable({
  providedIn: 'root'
})
export class LocalResolver implements Resolve<Local> {

  constructor(private service: LocaisService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Local> {
    if (route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({id_Local: 0, local_End: '', local_disp: '', local_Cap: 0, local_Name: ''});
  }
}
