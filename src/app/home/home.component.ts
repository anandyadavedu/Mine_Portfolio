import { Component ,ElementRef ,OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showfooter=false;

  @ViewChild('wordContainer') wordContainer!: ElementRef;
  words: string[] = ['Full Stack Developer','Web Developer', 'Software Developer', ' Front-End Developer','Back-End Developer','Mean Stack Developer'];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.showNextWord(), 2000);
  }

  showNextWord() {
    const container = this.wordContainer.nativeElement;
    container.classList.remove('show');
    this.currentIndex = (this.currentIndex + 1) % this.words.length;
    container.textContent = this.words[this.currentIndex];
    container.classList.add('show');
  }


}
