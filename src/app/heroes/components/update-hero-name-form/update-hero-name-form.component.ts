import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/shares/hero/hero.service';

@Component({
  selector: 'app-update-hero-name-form',
  templateUrl: './update-hero-name-form.component.html',
  styleUrls: ['./update-hero-name-form.component.css'],
})
export class UpdateHeroNameFormComponent {
  @Input() hero?: Hero;
  constructor(private heroService: HeroService, private location: Location) {}
  public save(): void {
    if (this.hero) {
      this.heroService
        .updateHero(this.hero)
        .subscribe(() => this.location.back());
    }
  }
}
