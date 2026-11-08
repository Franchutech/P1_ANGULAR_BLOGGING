import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
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

// inicio el formul

//creo el objeto con los mismos campos que mi json para poder agregar nuevas
nuevaNoticia = {
    Titulo: '',
    Imagen: '',
    Texto: '',
    FechaPublicacion: ''
  };

  //creo una funcion para agregarlas
  agregarNoticia() {
    if (
      this.nuevaNoticia.Titulo.trim() === '' ||
      this.nuevaNoticia.Imagen.trim() === '' ||
      this.nuevaNoticia.Texto.trim() === '' ||
      this.nuevaNoticia.FechaPublicacion.trim() === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    //LO METO EN EL ARRAY DE JSON

    this.listaPublicaciones.push({ ...this.nuevaNoticia }); 
    this.nuevaNoticia = {
      Titulo: '',
      Imagen: '',
      Texto: '',
      FechaPublicacion: ''
    };

}//cierro la funcion agregarNoticia


}//cierro mi clase blog