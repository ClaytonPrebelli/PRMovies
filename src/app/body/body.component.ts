import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Guest_session } from './guest-session.model';
import { FilmesGeralService } from './filmes-geral.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmesGeral, Lista_filmes, Lista_organizada } from './filmes-geral.model';
import { MatSort, MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
 
  
})
export class BodyComponent implements OnInit {

        guest_session!: Guest_session
        filmes!:FilmesGeral[]  //com interface somente de results:
        displayedColumns:string[] = ['title','vote_average','backdrop_path', 'id']
        lista_filmes!:Lista_filmes[] //com os dados reais necessários da aplicaçao
        organiza!:any[] // sem interace para poder ordenar

  constructor(private filmesGeralService : FilmesGeralService) { }

  ngOnInit(): void {
    //verifica se ja tem sessao e token
    let visitante= localStorage.getItem('id')
    if(visitante){
      //faz requisição pedindo a lista de filmes
      this.filmesGeralService.lista_filmes().subscribe(filmes=>{
        this.lista_filmes = filmes.results //transferido a lista_filmes devido ao formato de resposta (results:{...})
       this.organiza = this.lista_filmes; // transfere a um array sem interface para fazer sort
       //classifica pelo vote_average
      this.organiza.sort(function (a, b) {
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        if (a.vote_average < b.vote_average) {
          return 1;
        }
        return 0;
      });
      
     })
    }else{
  this.filmesGeralService.verifica_storage().forEach(guest_session=>{
    this.guest_session = guest_session
    let guest = this.guest_session.guest_session_id
    localStorage.setItem('id',guest)
    this.filmesGeralService.lista_filmes().subscribe(filmes=>{
      this.lista_filmes = filmes.results //transferido a lista_filmes devido ao formato de resposta (results:{...})
     this.organiza = this.lista_filmes; // transfere a um array sem interface para fazer sort
     //classifica pelo vote_average
    this.organiza.sort(function (a, b) {
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      return 0;
    });
    
   })
  })
 
} 
    
           
    }
  
  
    }
  


