import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Web Full-Stack",
        p: "Autônomo | Jun 2025 - Present",
      },
      text: "<p>Colocando meus conhecimentos de desenvolvimento web em prática com projetos reais, funcionais e dinamicos.</p><p>Transformando problemas reais em soluções técnologicas modernas e funcionais</p>"
    }
  ])
}
