import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material.ts/material';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  enviar(e: Event) {
    e.preventDefault();
    // integrar WhatsApp/EmailJS aqui
  }
}
