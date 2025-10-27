import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/Encurtei.png",
      alt: "Logo do projeto Encurtei - Online",
      title: "Encurtei",
      width: "100px",
      height: "100px",
      description: "<p>Um sistema de encurtamento de links 100% online e gratuito</p>",
      links: [
        {
          name: "Conheça o projeto",
          href: "https://encurtei.online"
        },
      ]
    }
  ])
}
