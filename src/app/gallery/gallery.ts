import { Component, signal } from '@angular/core';
import type { Image } from "../interfaces/image.interface";
import { ImageItemComponent } from '../image-item/image-item';


export const Gallery: Image[] = [
  { id : 1,
    url: 'https://picsum.photos/id/10/600/400',
    alt: 'Image of Forest with tall pinetrees and the sea at the background',
    title: 'Forest'
  },
  { id : 2,
    url: 'https://picsum.photos/id/11/300/200',
    alt: 'Image of a forest creek in a gloomy day',
    title: 'Creek'
  },
  { id : 3,
    url: 'https://picsum.photos/id/12/300/200',
    alt: 'Image of a Sand Beach i a gloomy day',
    title: 'Sand Beach'
  },
  { id : 4,
    url: 'https://picsum.photos/id/13/300/200',
    alt: 'Image of a Rocky Beach with pinetrees',
    title: 'Rocky Beach'
  },
  { id : 5,
    url: 'https://picsum.photos/id/14/300/200',
    alt: 'Image of Coast',
    title: 'Coast'
  },
  { id : 6,
    url: 'https://picsum.photos/id/15/300/200',
    alt: 'Image of a tall Waterfall in a deep forest',
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
