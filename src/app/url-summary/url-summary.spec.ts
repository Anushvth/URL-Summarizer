import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSummaryComponent } from './url-summary';

describe('UrlSummary', () => {
  let component: UrlSummaryComponent;
  let fixture: ComponentFixture<UrlSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
