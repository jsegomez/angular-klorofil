import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { ClientesRoutingModule } from './clientes-routing.module';

// Componentes
import { ClientesComponent } from './clientes/clientes.component';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';

// Módulos compartidos
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClientesComponent,
    ListarComponent,
    BuscarComponent,
    CrearEditarComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule
  ],
  exports: [
    ClientesComponent,
    ListarComponent,
    BuscarComponent,
    CrearEditarComponent
  ]
})
export class ClientesModule { }
