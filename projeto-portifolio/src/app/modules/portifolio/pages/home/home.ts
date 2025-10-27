import { Component } from '@angular/core';

// Components
import { Header } from '../../components/header/header';
import { Knowledge } from '../../components/knowledge/knowledge';
import { Experiences } from '../../components/experiences/experiences';

@Component({
  selector: 'app-home',
  imports: [Header, Knowledge, Experiences],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
