import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSmartComponent } from './list-smart.component';

describe('FeatListComponent', () => {
  let component: ListSmartComponent;
  let fixture: ComponentFixture<ListSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
