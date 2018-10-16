import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lid } from '../domain/lid.model'

@Injectable({
  providedIn: 'root'
})
export class LidService {
  private url: string = "http://173.212.208.199:8088/api";
  private endpoint: string = "lid";

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Lid[]> {
    return this
      .httpClient
      .get<Lid[]>(`${this.url}/${this.endpoint}`)
  }

}
