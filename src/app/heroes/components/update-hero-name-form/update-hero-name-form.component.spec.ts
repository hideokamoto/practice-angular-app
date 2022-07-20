import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeroNameFormComponent } from './update-hero-name-form.component';

describe('UpdateHeroNameFormComponent', () => {
  let component: UpdateHeroNameFormComponent;
  let fixture: ComponentFixture<UpdateHeroNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateHeroNameFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateHeroNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
