import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { GalleryComponent } from './gallery';

describe('test of GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();


    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('should create the GalleryComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should start with Gallery array', () => {
    expect(component.images().length).toBe(9)
    expect(component.images()[0].id).toBe(1)
  })


});
