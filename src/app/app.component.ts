import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string='binvenido a angular';
  curso= 'Curso Spring Angular 7';
  profesor:string="Ruben Silva";
}
