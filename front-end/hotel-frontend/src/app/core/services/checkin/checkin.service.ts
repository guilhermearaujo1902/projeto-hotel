import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  private url = 'http://localhost:8080/checkin';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<any>{
    return this.http.get(`${this.url}`);
  }

  public findById(id: number): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  public create(obj: Object): Observable<any>{
    return this.http.post(`${this.url}`, obj);
  }

  public update(obj: Object, id: number): Observable<any>{
    return this.http.put(`${this.url}/${id}`, obj);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
