import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteToDosComponent } from './site-to-dos.component';

describe('SiteToDosComponent', () => {
  let component: SiteToDosComponent;
  let fixture: ComponentFixture<SiteToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
