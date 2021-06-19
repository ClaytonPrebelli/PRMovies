import { Guest_session } from './guest-session.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FilmesGeralService {


  url_criar_session="https://api.themoviedb.org/3/authentication/guest_session/new?"
  apikey="api_key=3708b61e38d0ceaa4f797ba1ac2f4069"
  url_total= this.url_criar_session+this.apikey
  constructor(private http:HttpClient) { }

  verifica_storage():Observable<Guest_session>{
    
      return this.http.get<Guest_session>(this.url_total)
    }
  }

