import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showvid = true;
    flag = false;
    @ViewChild('player') player: ElementRef;

    scrollup = (ev) => console.log(ev);

    ngOnInit() {
        window.addEventListener('scroll', this.scrollup);
        this.flag = true;
        const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
        player.load();

        player.playbackRate = 1;
        player.onended = () => this.flag = false;
        if (this.showvid) {
            player.currentTime = 41;
            player.play();
        }
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
        console.log('hello');
    }
}
