import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPortfolioDataAccessComponent } from './my-portfolio-data-access.component';

describe('MyPortfolioDataAccessComponent', () => {
  let component: MyPortfolioDataAccessComponent;
  let fixture: ComponentFixture<MyPortfolioDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolioDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPortfolioDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
