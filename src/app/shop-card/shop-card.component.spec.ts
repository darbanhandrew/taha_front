import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopCardComponent } from './shop-card.component';

describe('ShopCardComponent', () => {
  let component: ShopCardComponent;
  let fixture: ComponentFixture<ShopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
