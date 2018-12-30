import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  isDevMode
} from '@angular/core';
import {Component, HostBinding} from '@angular/core';
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
      transition(':enter', [animate('300ms ease-in'),
      style({ transform: 'scale(1)'})]),
      transition(':leave', [animate('300ms ease-out'),
      style({height: 0, display: 'none', transform: 'scale(0.3)'})]),
      state(':leave', style({height: 0, display: 'none', transform: 'scale(0.3)'})),
      state(':enter', style({height: '*', transform: 'scale(1)'})),
   ] )
  ]
})
export class AppComponent implements OnInit {
  showvid = true;
  showFirstRow = true;
  flag = true;
  lastScrollPos = 0;
  @ViewChild('player') player: ElementRef;
  @ViewChild('drinkvid') drinkvid: ElementRef;
  @ViewChild('foodjourney') foodjourney: ElementRef;

  scrollup = (ev) => {
    if(window.scrollY === 0) {
      this.showFirstRow = true;
    } else {
      this.showFirstRow = false;
    }
  };

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
      // git adreturn;

    }
    setTimeout(() => {
      const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
      player.load();
      player.playbackRate = 1;
      player.onended = () => this.flag = false;
      if (this.showvid) {
        console.log('this show vid is good');
        player.currentTime = 1;
        player.play();
        // drink video
      }
    }, 500);

  }

  load(event) {
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
    console.log('hello' + this.flag);
  }

  scrollToElement(ele) {
    console.log(ele);
    const html: HTMLHtmlElement = ele as HTMLHtmlElement;
    console.log(html);
    html.scrollIntoView({behavior: 'smooth'});
    // window.scrollBy(0, -150);
  }
}
