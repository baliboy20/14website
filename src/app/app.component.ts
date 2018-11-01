import {Component, ElementRef, HostListener, OnInit, ViewChild, isDevMode} from '@angular/core';
import {MatCard} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showvid = true;
    showFirstRow = true;
    flag = true;
    lastScrollPos = 0;
    @ViewChild('player') player: ElementRef;

    scrollup = (ev) => console.log(ev);

    ngAfterInit() {

    }

    ngOnInit() {
        window.addEventListener('scroll', this.scrollup);
        this.flag = true;
        if (isDevMode()) {
            this.flag = false;
            return;

        }
        setTimeout(() => {
            const player: HTMLVideoElement = this.player.nativeElement as HTMLVideoElement;
            player.load();

            player.playbackRate = 1;
            player.onended = () => this.flag = false;
            if (this.showvid) {
                player.currentTime = 1;
                player.play();
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
        console.log(ele);
        const html: HTMLHtmlElement = ele as HTMLHtmlElement;
        console.log(html);
        html.scrollIntoView(true);
    }
}
