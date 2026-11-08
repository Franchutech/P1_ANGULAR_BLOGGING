import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //esto sirve para el ngFor por ejemplo y funcionalidades con el HTML

@Component({
  imports: [CommonModule],
  selector: 'app-blog',
  styleUrl: './blog.css',
  templateUrl: './blog.html',
})
export class Blog {
  //Creo el array multidimencional de JSON
  listaPublicaciones = [
    {
      Titulo: 'Novedades de la feria CantabriaTech',
      Imagen: 'imgs/imagen2.jpg',
      Texto: 'Esta semana tuvimos novedades en la feria de empleo Cantabria Tech',
      FechaPublicacion: '2026-11-11'
    },
    {
      Titulo: 'Nuevos Dispositivos de Realidad Aumentada',
      Imagen: 'imgs/imagen1.jpg',
      Texto: 'Esta semana tuvimos novedades en la feria de empleo Cantabria Tech',
      FechaPublicacion: '2026-11-11'
    }
  ];
}