import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPortfolioUiComponent } from './my-portfolio-ui.component';

describe('MyPortfolioUiComponent', () => {
  let component: MyPortfolioUiComponent;
  let fixture: ComponentFixture<MyPortfolioUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolioUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPortfolioUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
