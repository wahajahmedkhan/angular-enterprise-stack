import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteSmartComponent } from './favourite-smart.component';

describe('FeatFavouriteComponent', () => {
  let component: FavouriteSmartComponent;
  let fixture: ComponentFixture<FavouriteSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
