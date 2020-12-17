import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMobiliteComponent } from './ajouter-mobilite.component';

describe('AjouterMobiliteComponent', () => {
  let component: AjouterMobiliteComponent;
  let fixture: ComponentFixture<AjouterMobiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMobiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMobiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
