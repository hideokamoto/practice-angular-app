import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNameFilterComponent } from './hero-name-filter.component';

describe('HeroNameFilterComponent', () => {
  let component: HeroNameFilterComponent;
  let fixture: ComponentFixture<HeroNameFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroNameFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroNameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
