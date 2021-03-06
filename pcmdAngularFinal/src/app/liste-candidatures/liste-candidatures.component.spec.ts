import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidaturesComponent } from './liste-candidatures.component';

describe('ListeCandidaturesComponent', () => {
  let component: ListeCandidaturesComponent;
  let fixture: ComponentFixture<ListeCandidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCandidaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
