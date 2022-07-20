import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHeroButtonComponent } from './delete-hero-button.component';

describe('DeleteHeroButtonComponent', () => {
  let component: DeleteHeroButtonComponent;
  let fixture: ComponentFixture<DeleteHeroButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteHeroButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteHeroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
