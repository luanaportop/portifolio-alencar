import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material.ts/material';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
