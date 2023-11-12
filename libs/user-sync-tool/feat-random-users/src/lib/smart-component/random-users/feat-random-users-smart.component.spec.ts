import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatRandomUsersSmartComponent } from './feat-random-users-smart.component';

describe('FeatRandomUsersComponent', () => {
  let component: FeatRandomUsersSmartComponent;
  let fixture: ComponentFixture<FeatRandomUsersSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatRandomUsersSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatRandomUsersSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
