import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueensPuzzleComponent } from './queens-puzzle.component';

describe('QueensPuzzleComponent', () => {
  let component: QueensPuzzleComponent;
  let fixture: ComponentFixture<QueensPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueensPuzzleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueensPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
