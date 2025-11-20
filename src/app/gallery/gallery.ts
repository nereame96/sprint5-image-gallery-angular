import { Component, signal } from '@angular/core';
import type { Image } from "../interfaces/image.interface";
import { ImageItemComponent } from '../image-item/image-item';


export const Gallery: Image[] = [
  { id : 1,
    url: 'https://picsum.photos/id/10/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 2,
    url: 'https://picsum.photos/id/11/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 3,
    url: 'https://picsum.photos/id/12/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 4,
    url: 'https://picsum.photos/id/13/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 5,
    url: 'https://picsum.photos/id/14/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 6,
    url: 'https://picsum.photos/id/15/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 7,
    url: 'https://picsum.photos/id/17/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 8,
    url: 'https://picsum.photos/id/18/300/200',
    alt: 'jien',
    title: 'fdfsf'
  },
  { id : 9,
    url: 'https://picsum.photos/id/19/300/200',
    alt: 'jien',
    title: 'fdfsf'
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
