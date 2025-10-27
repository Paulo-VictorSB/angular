import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/Encurtei.png",
      alt: "Logo do projeto Encurtei - Online",
      title: "Encurtei",
      width: "100px",
      height: "100px",
      description: "<p>O Encurtei é a melhor ferramenta gratuita para encurtar URLs no Brasil. Transforme links longos em URLs curtas, seguras e fáceis de compartilhar em redes sociais, WhatsApp, email e qualquer lugar.</p> <p>Um encurtador de URLs é uma ferramenta essencial para quem precisa compartilhar links de forma eficiente. O Encurtei oferece a melhor solução gratuita para transformar URLs longas em links curtos e memoráveis.</p>",
      links: [
        {
          name: "Conheça o projeto",
          href: "https://encurtei.online"
        },
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
