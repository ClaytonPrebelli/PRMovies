import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFilmeComponent } from './ver-filme.component';

describe('VerFilmeComponent', () => {
  let component: VerFilmeComponent;
  let fixture: ComponentFixture<VerFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
