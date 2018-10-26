import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatCard} from '@angular/material';
import {fromEvent, Observable} from 'rxjs/index';
// import {throttleTime} from 'rxjs';
import {map} from 'rxjs/operators';
import {debounceTime} from "rxjs/internal/operators";
// import 'rxjs/add/operator/debounceTime';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FileNameDialogComponent } from '../file-name-dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fileNameDialogRef: MatDialogRef<FileNameDialogComponent>;
  showvid = true;
  showFirstRow = true;
  flag = true;
  private lastScrollPos = 0;
  private scrollPos = 9;
  @ViewChild('player') player: ElementRef;

  getScrollPos(ev) {
    let sc = window.pageYOffset;
    this.lastScrollPos = this.scrollPos;
    this.scrollPos = sc;
    // console.log('scrollY', this.scrollPos, this.lastScrollPos);
  }

  ngAfterInit() {
  }

  ngOnInit() {
    this.lastScrollPos = 5678;
    // window.addEventListener('scroll', this.getScrollPos);
    const obs = fromEvent(window, 'scroll');
    obs.pipe(map(a => a), debounceTime(1))
    // .map(a => a)
    // .debounceTime(5)
    // .map(this.getScrollPos)
      .subscribe(this.getScrollPos)
  }

  initVid() {
    this.flag = true;
    window.setTimeout(() => {
      const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
      player.load();
      player.playbackRate = 1;
      player.onended = () => this.flag = false;
      if (this.showvid) {
        player.currentTime = 0;
        player.play(); //jj
        console.log('it should be playing now');
      }
    }, 500);
  }





  load(event) {
    console.log('play video');
    // player.play();
  }

  closeVideoWindow() {
    const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
    player.pause();
    player.currentTime = 0;
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
    console.log(ele)
    const html: HTMLHtmlElement = ele as HTMLHtmlElement;
    // console.log(html);
    html.scrollIntoView(true);
  }
}
