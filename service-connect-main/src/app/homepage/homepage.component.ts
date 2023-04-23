import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cards = [
    {
      title: "Dog 1",
      Name: "Shiba",
      Breed: "Dog Breed",
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. \
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally \
      bred for hunting."
    },
    {
      title: "Dog 2",
      Name: "Shiba",
      Breed: "Dog Breed",
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. \
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally \
      bred for hunting."
    },
    {
      title: "Dog 3",
      Name: "Shiba",
      Breed: "Dog Breed",
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. \
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally \
      bred for hunting."
    },
    {
      title: "Dog 4",
      Name: "Shiba",
      Breed: "Dog Breed",
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. \
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally \
      bred for hunting."
    }
  ]

}
