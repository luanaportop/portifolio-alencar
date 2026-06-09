import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material.ts/material';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
