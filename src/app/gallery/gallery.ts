import { Component, signal } from '@angular/core';
import type { Image } from "../interfaces/image.interface";
import { ImageItemComponent } from '../image-item/image-item';


export const Gallery: Image[] = [
  { id : 1,
    url: 'https://picsum.photos/id/10/300/200',
    alt: 'Image of Forest',
    title: 'Forest'
  },
  { id : 2,
    url: 'https://picsum.photos/id/11/300/200',
    alt: 'Image if River',
    title: 'River'
  },
  { id : 3,
    url: 'https://picsum.photos/id/12/300/200',
    alt: 'Image of Sand Beach',
    title: 'Sand Beach'
  },
  { id : 4,
    url: 'https://picsum.photos/id/13/300/200',
    alt: 'Image of Rocky Beach',
    title: 'Rocky Beach'
  },
  { id : 5,
    url: 'https://picsum.photos/id/14/300/200',
    alt: 'Image of Coast',
    title: 'Coast'
  },
  { id : 6,
    url: 'https://picsum.photos/id/15/300/200',
    alt: 'Image of Waterfall',
    title: 'Waterfall'
  },
  { id : 7,
    url: 'https://picsum.photos/id/17/300/200',
    alt: 'Image of Rural Path ',
    title: 'Rural Path'
  },
  { id : 8,
    url: 'https://picsum.photos/id/18/300/200',
    alt: 'Image of Fresh Grass',
    title: 'Fresh Grass'
  },
  { id : 9,
    url: 'https://picsum.photos/id/19/300/200',
    alt: 'Image of Moss Tree',
    title: 'Moss Tree'
  },


]

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItemComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})

export class GalleryComponent {

  images = signal(Gallery)
}
