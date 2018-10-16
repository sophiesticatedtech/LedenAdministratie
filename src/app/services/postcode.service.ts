import { Injectable } from '@angular/core';
import { Postcode } from '../domain/postcode.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { publicDecrypt } from 'crypto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PostcodeService {

  private url: string = "http://173.212.208.199:8088/api";
  private endpoint: string = "postcode";

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Postcode[]> {
    return this
      .httpClient
      .get<Postcode[]>(`${this.url}/${this.endpoint}`)
  };
  add(pcd: Postcode): Observable<number> {
    return this
      .httpClient
      .post<number>(
        `${this.url}/${this.endpoint}`,
        pcd,
        httpOptions
      )
  };
  update(pcd: Postcode): Observable<Postcode> {
    return this
      .httpClient
      .put<Postcode>(
        `${this.url}/${this.endpoint}/${pcd.id}`,
        pcd,
        httpOptions
      )
  };

  delete(id: number): Observable<{}> {
    return this
      .httpClient
      .delete(
        `${this.url}/${this.endpoint}/` + id,
      )
  };
};





