import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-animation',
  templateUrl: './icon-animation.component.html',
  styleUrls: ['./icon-animation.component.scss']
})
export class IconAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    const element = document.querySelector(".wrapper");
    element.classList.toggle('active');
  }

}
