import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfo2Component } from './admin-info2.component';

describe('AdminInfo2Component', () => {
  let component: AdminInfo2Component;
  let fixture: ComponentFixture<AdminInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInfo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
