import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAgGridComponent } from './test-ag-grid.component';

describe('TestAgGridComponent', () => {
  let component: TestAgGridComponent;
  let fixture: ComponentFixture<TestAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAgGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
