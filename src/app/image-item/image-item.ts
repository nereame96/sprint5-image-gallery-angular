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

  @HostBinding('class.col-span-2')
    get colSpan() {
      return this.isFeatured()
    }
  @HostBinding('class.row-span-2')
    get rowSpan() {
      return this.isFeatured()
    }

  @HostBinding('class.featured')

    get isFeaturedClass() {

        return this.isFeatured();
    }

}
