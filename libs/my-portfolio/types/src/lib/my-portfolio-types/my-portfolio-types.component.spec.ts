import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPortfolioTypesComponent } from './my-portfolio-types.component';

describe('MyPortfolioTypesComponent', () => {
  let component: MyPortfolioTypesComponent;
  let fixture: ComponentFixture<MyPortfolioTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolioTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPortfolioTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
