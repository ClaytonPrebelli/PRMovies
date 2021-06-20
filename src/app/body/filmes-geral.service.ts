import { Guest_session } from './guest-session.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesGeral } from './filmes-geral.model';
import { catchError, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmesGeralService {
  //endereços de request
  url_criar_session="https://api.themoviedb.org/3/authentication/guest_session/new?"
  apikey="api_key=3708b61e38d0ceaa4f797ba1ac2f4069"
  url_total= this.url_criar_session+this.apikey
  url_busca="https://api.themoviedb.org/3/movie/now_playing?api_key=3708b61e38d0ceaa4f797ba1ac2f4069&language=pt-br&page=1"
  url_busca_id = "https://api.themoviedb.org/3/movie/"
  linguagem="&language=pt-BR"

  constructor(private http:HttpClient) { }
  //cria sessao guest
  verifica_storage():Observable<Guest_session>{
    
      return this.http.get<Guest_session>(this.url_total)
    }
  // busca todos os filmes now playing
    lista_filmes():Observable<FilmesGeral>{
      return this.http.get<FilmesGeral>(this.url_busca)
    }
  // busca filme pelo id para exibir ficha total
    buscaId(id:any):Observable<FilmesGeral>{
      return this.http.get<FilmesGeral>(this.url_busca_id+id+"?"+this.apikey+this.linguagem)
    }
  }

