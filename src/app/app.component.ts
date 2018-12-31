import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  isDevMode,
  HostBinding,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('collapseTrigger', [
      transition(':enter', [
        style({transform: 'scale(0)'}),
        animate('300ms  ease-out',
        style({transform: 'scale(1)'}))]),

        transition(':leave', [animate('300ms ease-out'),
          style({height: 0, display: 'none', transform: 'scale(0.3)'})])
      ])
    ]
})
export class AppComponent implements OnInit {
  showvid = false;
  showFirstRow = true;
  flag = false;
  lastScrollPos = 0;
  showFood = false;
  showDrink = false;
  @ViewChild('player') player: ElementRef;
  @ViewChild('drinkvid') drinkvid: ElementRef;
  @ViewChild('foodjourney') foodjourney: ElementRef;

  scrollup = (ev) => {
    const lastpos = this.lastScrollPos;
    this.lastScrollPos = window.scrollY;
    const dir = (lastpos > window.scrollY) ? 'up' : 'down';
    if (window.scrollY <= 0 && dir === 'up') {
      this.showFirstRow = true;
    } else {
      this.showFirstRow = lastpos < 0;
    }
    console.log('scroll event', window.scrollY);
  }

  ngAfterInit() {

  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollup);
    console.log('hello dolly', this.drinkvid.nativeElement);
    this.flag = true;
    const drinkvid1: HTMLVideoElement = this.drinkvid.nativeElement as HTMLVideoElement;
    drinkvid1.load();
    drinkvid1.currentTime = 1;
    const foodjoun: HTMLVideoElement = this.foodjourney.nativeElement as HTMLVideoElement;
    foodjoun.load();
    foodjoun.currentTime = 1;

    if (isDevMode()) {
      this.flag = false;
      return;

    }
    setTimeout(() => {
      const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
      player.load();
      player.playbackRate = 1;
      // player.onload((e: Event) => console.log('player has beenn loaded'))
      player.onended = () => this.flag = false;
      if (this.showvid) {
        console.log('this show vid is good');
        player.currentTime = 1;
        player.play();
        // drink video
      }
    }, 500);

  }

  onLoad(event) {
    console.log('video loaded');
    // player.play();
  }

  closeVideoWindow() {
    const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
    player.pause();
    player.currentTime = 2;
    this.showvid = false;
  }


  vidFinish(event) {
    console.log('video finished');
  }

  closeVidWindow() {
    const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
    player.pause();
    player.currentTime = 0;
    this.showvid = false;
    this.flag = false;
  }

  scrollToElement(ele) {
    console.log(ele);
    const html: HTMLHtmlElement = ele as HTMLHtmlElement;
    console.log(html);
    html.scrollIntoView({behavior: 'smooth'});
    // window.scrollBy(0, -150);
  }
}
