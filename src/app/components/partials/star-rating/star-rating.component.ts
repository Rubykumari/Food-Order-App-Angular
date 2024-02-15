import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})

export class StarRatingComponent {
  @Input() stars!: number
  size: number = 1
  ngOnInit(): void { }
  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6
    }
  }

  getStarImage(current: number): string {
    const previousHalf = current - 0.5;

    const imgName = this.stars >= current ? 'star_full' : this.stars >= previousHalf ? 'star_half' : 'star_empty';

    return `assets/${imgName}.png`;

  }
}
