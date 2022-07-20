import { Component } from '@angular/core';
import { HeroService } from 'src/app/shares/hero/hero.service';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.css'],
})
export class AddHeroFormComponent {
  constructor(private heroService: HeroService) {}
  public add(name: string): void {
    const _name = name.trim();
    if (!_name) return;
    this.heroService
      .addHero({ name: _name })
      .subscribe((_) => this.heroService.fetchHeroes());
  }
}
