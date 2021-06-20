import { MatTableModule } from '@angular/material/table';
import { NgModule, NgModuleDecorator } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BodyComponent } from './body/body.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MinhasAvaliacoesComponent } from './minhas-avaliacoes/minhas-avaliacoes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { VerFilmeComponent } from './components/ver-filme/ver-filme.component';
import { AppRoutingModule } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import { SliderComponent } from './components/slider/slider.component';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MinhasAvaliacoesComponent,
    VerFilmeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
