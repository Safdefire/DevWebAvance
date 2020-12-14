import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMobilitesComponent } from './liste-mobilites.component';

describe('ListeMobilitesComponent', () => {
  let component: ListeMobilitesComponent;
  let fixture: ComponentFixture<ListeMobilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMobilitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMobilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
