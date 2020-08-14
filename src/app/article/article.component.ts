import { Component, OnInit } from '@angular/core';

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(`Just for fun: ${fibonacci(42)}`);

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public photos: { src: string, title: string }[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.photos = [{
      src: 'wp-1.jpg',
      title: 'Teams greet each other'
    }, {
      src: 'wp-2.jpg',
      title: 'Discussing the strategy'
    }, {
      src: 'wp-3.jpg',
      title: 'The first attack'
    }, {
      src: 'wp-4.jpg',
      title: 'A goalie\'s view'
    }, {
      src: 'wp-5.jpg',
      title: 'Wonderful supporters'
    }, {
      src: 'wp-6.jpg',
      title: 'Team introductions'
    }, {
      src: 'wp-7.jpg',
      title: 'Good, tactical attacking'
    }]
  }

}
