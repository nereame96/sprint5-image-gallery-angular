import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from "./gallery/gallery";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
