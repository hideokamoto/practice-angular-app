import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroListUsecase } from 'src/app/shares/hero/hero-list.usecase';
import { HeroService } from 'src/app/shares/hero/hero.service';

@Component({
  selector: 'app-delete-hero-button',
  templateUrl: './delete-hero-button.component.html',
  styleUrls: ['./delete-hero-button.component.css'],
})
export class DeleteHeroButtonComponent {
  @Input() hero?: Hero;
  constructor(
    private heroService: HeroService,
    private heroListUsecase: HeroListUsecase
  ) {}
  public delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe();
    this.heroListUsecase.fetchHeroes();
  }
}
