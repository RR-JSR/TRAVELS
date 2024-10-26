import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastbookingpageComponent } from './pastbookingpage.component';

describe('PastbookingpageComponent', () => {
  let component: PastbookingpageComponent;
  let fixture: ComponentFixture<PastbookingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastbookingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastbookingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
