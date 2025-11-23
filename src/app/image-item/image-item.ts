import { Component, input, HostBinding } from '@angular/core';
import { Image } from '../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.scss',

})


export class ImageItemComponent {

  image = input.required<Image>()
  isFeatured = input(false)

  onImageClick(event?: MouseEvent | KeyboardEvent): void {
    event?.preventDefault();
    console.log('Clicked image:', this.image().title);

  }

  @HostBinding('class.col-span-2')
    get colSpan() : boolean {
      return this.isFeatured()
    }
  @HostBinding('class.row-span-2')
    get rowSpan() : boolean {
      return this.isFeatured()
    }

  @HostBinding('class.featured')

    get isFeaturedClass() : boolean {

        return this.isFeatured();
    }

}
