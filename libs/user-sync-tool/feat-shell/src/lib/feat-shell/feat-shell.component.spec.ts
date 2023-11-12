import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatShellComponent } from './feat-shell.component';

describe('FeatShellComponent', () => {
  let component: FeatShellComponent;
  let fixture: ComponentFixture<FeatShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
