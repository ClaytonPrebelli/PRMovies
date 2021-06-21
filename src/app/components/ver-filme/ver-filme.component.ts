import { FilmesGeralService } from './../../body/filmes-geral.service';
import { HttpHeaders } from '@angular/common/http';
import { FilmesGeral, Lista_filmes, Generos, Nota } from './../../body/filmes-geral.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-filme',
  templateUrl: './ver-filme.component.html',
  styleUrls: ['./ver-filme.component.css']
})


export class VerFilmeComponent implements OnInit {
  filmes!:FilmesGeral
  lista_filmes!:Lista_filmes //com os dados reais necessários da aplicaçao
  organiza!:any // sem interace para poder ordenar
  generos!:Generos[]
  constructor(private router:Router, private activated: ActivatedRoute, private filmes_geral_service: FilmesGeralService) { }
  nota:Nota={
    value:0
  }
 
  ngOnInit(): void {
    const id = this.activated.snapshot.paramMap.get('id')
    //captura todos os filmes pelo id do filme
   this.filmes_geral_service.buscaId(id).subscribe(filmes=>{
      this.lista_filmes = filmes
      this.organiza = this.lista_filmes
      this.generos = Object.values(this.organiza.genres)  //captura somente os nomes dos generos
    })
  }
  envia_voto(): void {
    const id = this.activated.snapshot.paramMap.get('id')
    this.filmes_geral_service.vota(this.nota,id).subscribe(() => {
      this.filmes_geral_service.showMessage('Avaliação enviada'),
      this.router.navigate(['/'])
    })
  }

}
