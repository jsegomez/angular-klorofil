import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ListarComponent } from './listar/listar.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
    children: [
      {path: 'lista',        component: ListarComponent      },
      {path: 'crear-editar',  component: CrearEditarComponent },
      {path: 'buscar',        component: BuscarComponent      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
