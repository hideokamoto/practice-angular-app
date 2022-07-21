import { Component, Input } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.css'],
})
export class HeroListItemComponent {
  @Input() hero?: Hero;
  constructor() {}
}
