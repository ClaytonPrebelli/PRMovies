import { ActivatedRoute, Router } from '@angular/router';
import { FilmesGeralService } from './../body/filmes-geral.service';
import { FilmesGeral, Lista_filmes } from './../body/filmes-geral.model';
import { Guest_session } from './../body/guest-session.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-avaliacoes',
  templateUrl: './minhas-avaliacoes.component.html',
  styleUrls: ['./minhas-avaliacoes.component.css']
})
export class MinhasAvaliacoesComponent implements OnInit {
  guest_session!: Guest_session
  filmes!:FilmesGeral[]  //com interface somente de results:
  displayedColumns:string[] = ['title','vote_average','backdrop_path', 'id']
  lista_filmes!:Lista_filmes[] //com os dados reais necessários da aplicaçao
  organiza!:any[] // sem interace para poder ordenar

constructor(private filmesGeralService : FilmesGeralService,private router:Router, private activated: ActivatedRoute) { }

  ngOnInit(): void { let visitante= localStorage.getItem('id')
  //remove avaliacao
  
 

  if(visitante){
    //faz requisição pedindo a lista de filmes
    this.filmesGeralService.lista_votados().subscribe(filmes=>{
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
  remove_voto(id:any):void{    
   
    this.filmesGeralService.remove(id).subscribe(() => {
      this.filmesGeralService.showMessage('Avaliação removida'),
      this.router.navigate(['/'])
    })
  }

  }

