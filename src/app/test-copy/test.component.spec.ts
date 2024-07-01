import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCopyComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestCopyComponent;
  let fixture: ComponentFixture<TestCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
