import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento de php'
    },
    {
      src: 'assets/icons/knowledge/laravel.svg',
      alt: 'Ícone de conhecimento de laravel'
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'Ícone de conhecimento de Javascript'
    },
    {
      src: 'assets/icons/knowledge/vue.svg',
      alt: 'Ícone de conhecimento de vue'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Ícone de conhecimento de bootstrap'
    },
  ]);
}
