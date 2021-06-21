import { ActivatedRoute } from '@angular/router';
import { Guest_session } from './guest-session.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesGeral, Nota } from './filmes-geral.model';
import { catchError, map, retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmesGeralService {
  //endereços de request
  url_criar_session="https://api.themoviedb.org/3/authentication/guest_session/new?"
  apikey="api_key=3708b61e38d0ceaa4f797ba1ac2f4069"
  url_total= this.url_criar_session+this.apikey
  url_busca="https://api.themoviedb.org/3/movie/now_playing?"
  url_busca_id = "https://api.themoviedb.org/3/movie/"
  linguagem="&language=pt-BR"
  url_vota="https://api.themoviedb.org/3/movie/"
  url_busca_votados = "https://api.themoviedb.org/3/guest_session/"+localStorage.getItem('id')+"/rated/movies?"+this.apikey+this.linguagem
  httpOptions = {
    headers: ({ "Content-Type": "application/json;charset=utf-8"})
  }
  

 
  constructor(private http:HttpClient,private snackbar:MatSnackBar,private route:ActivatedRoute) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }  
  token_guest = localStorage.getItem('id')

  //cria sessao guest
  verifica_storage():Observable<Guest_session>{
    
      return this.http.get<Guest_session>(this.url_total)
    }
  // busca todos os filmes now playing
    lista_filmes():Observable<FilmesGeral>{
      return this.http.get<FilmesGeral>(this.url_busca+this.apikey)
    }
  // busca os filmes votados
  lista_votados():Observable<FilmesGeral>{
    
    return this.http.get<FilmesGeral>(this.url_busca_votados)
  }
  
  // busca filme pelo id para exibir ficha total
    buscaId(id:any):Observable<FilmesGeral>{
      return this.http.get<FilmesGeral>(this.url_busca_id+id+"?"+this.apikey+this.linguagem)
    }
  
  // envia voto
    vota(nota:Nota,id:any):Observable<Nota>{
  
      var local = localStorage.getItem('id')
    
      // envia requisicao
     
     return this.http.post<Nota>(this.url_vota+id+"/rating?"+this.apikey+"&guest_session_id="+local,JSON.stringify(nota),this.httpOptions).pipe(retry(1),catchError(this.errorHandler))
  
    }
    // remove voto
    remove(id:any):Observable<Nota>{
  
      var local = localStorage.getItem('id')
    
      // envia requisicao
     
     return this.http.delete<Nota>(this.url_vota+id+"/rating?"+this.apikey+"&guest_session_id="+local,this.httpOptions).pipe(retry(1),catchError(this.errorHandler))
  
    }

    errorHandler(e: any): Observable<any> {
      this.showMessage('Ops! Há algo errado com o banco de dados', true)
      return EMPTY
    }
  }
