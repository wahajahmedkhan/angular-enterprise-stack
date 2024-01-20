import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPortfolioShellComponent } from './my-portfolio-shell.component';

describe('MyPortfolioShellComponent', () => {
  let component: MyPortfolioShellComponent;
  let fixture: ComponentFixture<MyPortfolioShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolioShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPortfolioShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
