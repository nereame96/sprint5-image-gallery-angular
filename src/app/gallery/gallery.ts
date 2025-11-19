import { Component, signal } from '@angular/core';
import type { Image } from "../interfaces/image.interface";



export const dummyImages: Image[] = [
  { id : 1,
    url: 'nvievidnjd',
    description: 'fdfsf'
  },
  { id : 2,
    url: 'nvievidnjd',
    description: 'fdfsf'
  },
  { id : 3,
    url: 'nvievidnjd',
    description: 'fdfsf'
  }

]

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})

export class GalleryComponent {

  images = signal(dummyImages)
}
