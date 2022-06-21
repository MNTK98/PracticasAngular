import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[]=[
    {id: 1, nombre: 'Ruben', apellido: 'Silva', email: 'ruben@correo.com', createAt: '2022-06-21'},
    {id: 2, nombre: 'Ale', apellido: 'Perez', email: 'ale@correo.com', createAt: '2022-06-13'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
