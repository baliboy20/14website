import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

    flag = false;
    @ViewChild('player') player: ElementRef;
    ngOnInit() {
       // this.flag = true;
        const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
        player.load();
        console.log('ng onit play video');
        player.playbackRate = 10;
        player.onended = () => this.flag = false;
       // player.play();
    }
    // @HostListener('onload', ['$event.target'])
    load(event) {
        // const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
        console.log('play video'); //fjsd
        // player.play();
    }


    vidFinish(event) {
        console.log('video finished');
    }
}
