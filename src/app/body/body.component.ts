import { Guest_session } from './guest-session.model';
import { FilmesGeralService } from './filmes-geral.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

        guest_session!: Guest_session
  constructor(private filmesGeralService : FilmesGeralService) { }

  ngOnInit(): void {

  this.filmesGeralService.verifica_storage().forEach(guest_session=>{
    this.guest_session = guest_session
    
    let guest = this.guest_session.guest_session_id
    let visitante= localStorage.getItem('id')
    if(visitante){
      //setar algo para quando ja tiver sessao
    }else{
      localStorage.setItem('id',guest)      
    }
  })
  
    }
  }


