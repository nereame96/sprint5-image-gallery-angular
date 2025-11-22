import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ImageItemComponent } from './image-item';
import { Image } from "../interfaces/image.interface";

describe('ImageItem', () => {
  let component: ImageItemComponent;
  let fixture: ComponentFixture<ImageItemComponent>;

  const testImage: Image = {
    id : 1,
    url: 'https://picsum.photos/id/10/300/200',
    alt: 'Image of Forest',
    title: 'Forest'
  }



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItemComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('image', testImage);
    fixture.detectChanges();
  });


  it('should create the component', () => {


    expect(component).toBeTruthy();
  });


  it('should receive the image correctly', () => {

    expect(component.image().id).toBe(1)
    expect(component.image().url).toBe('https://picsum.photos/id/10/300/200')
    expect(component.image().alt).toBe('Image of Forest')
    expect(component.image().title).toBe('Forest')
  })

  it('should isFeatured be by default false', () => {

    expect(component.isFeatured()).toBe(false)
  })

  it('should isFeaturted be able to change to true', () => {
    fixture.componentRef.setInput('isFeatured', true)


    expect(component.isFeatured()).toBe(true)
  })

  it('should show the image in the HTML', () => {
    const img = fixture.nativeElement.querySelector('img', testImage)

    expect(img).toBeTruthy()
    expect(img.src).toBe('https://picsum.photos/id/10/300/200')
    expect(img.alt).toBe('Image of Forest')
  })

  it('should show the title in the html', () => {

    const p = fixture.nativeElement.querySelector('p')

    expect(p.textContent).toBe('Forest')
  })


});
