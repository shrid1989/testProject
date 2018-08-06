import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN} from './jQuery.service';
import { CarouselPopupComponent} from '../common/carousel-popup.component';
@Directive({
    selector:'[modal-trigger]',
    providers:[CarouselPopupComponent]
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
    @Input() pIndex : any;
    constructor( private ref: ElementRef, @Inject(JQ_TOKEN) private $ : any, private carousel:CarouselPopupComponent){
        this.el = ref.nativeElement;
    }

    ngOnInit(){
        console.log("modal trigger init");
        this.el.addEventListener('click', e => {
            this.carousel.clickMe(this.pIndex);
        })
       
    }
}