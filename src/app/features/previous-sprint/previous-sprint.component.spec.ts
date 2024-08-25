import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSprintComponent } from './previous-sprint.component';

describe('PreviousSprintComponent', () => {
  let component: PreviousSprintComponent;
  let fixture: ComponentFixture<PreviousSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousSprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
