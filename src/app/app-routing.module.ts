import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MinhasAvaliacoesComponent } from './minhas-avaliacoes/minhas-avaliacoes.component';
const routes: Routes = [
{
  path: "",
  component: BodyComponent
},{
  path:"minhas",
  component: MinhasAvaliacoesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
