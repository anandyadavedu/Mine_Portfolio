import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // dots:any;

  // constructor(){
  //   const circles=document.querySelectorAll('.circle');
  //   circles.forEach(elem=>{
  //     var dots:any=elem.getAttribute("data-dots");
  //     var marked:any= elem.getAttribute("data-percent");
  //     var percent:any=Math.floor(dots*marked/100);
  //     var points:any="";
  //     var rotate=360/dots;

  //     for(let i=0; i<dots;i++){
  //       points+= '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
  //     }
  //     elem.innerHTML=points;

  //     const pointsMarked=elem.querySelectorAll('.points');
  //     for(let i=0;i<percent;i++){
  //       pointsMarked[i].classList.add('marked');
  //     }
  //   })

  // }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const circles = this.el.nativeElement.querySelectorAll('.circle');

    circles.forEach((elem: any) => {
      var dots = parseInt(elem.getAttribute('data-dots'), 10);
      var marked = parseInt(elem.getAttribute('data-percent'), 10);
      var percent = Math.floor(dots * marked / 100);
      var points:any = "";

      const rotate = 360 / dots;

      for (let i = 0; i < dots; i++) {
        // points.push(i);
        points += '<div class="points" [style=.--i]="i"; [style.--rot]=rotate*deg"></div>';
      }

      points.forEach((i: number) => {
        const point = this.renderer.createElement('div');
        this.renderer.addClass(point, 'points');

        // Set dynamic styles using Angular's Renderer2
        this.renderer.setStyle(point, '--i', i);
        this.renderer.setStyle(point, '--rot', `${rotate * i}deg`);

        // Append the point to the element
        this.renderer.appendChild(elem, point);
      });

      const pointsMarked = elem.querySelectorAll('.points');
      for (let i = 0; i < percent; i++) {
        this.renderer.addClass(pointsMarked[i], 'marked');
      }
    });
  }
  



}
