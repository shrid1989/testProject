import { Component, OnInit, Inject, Input } from '@angular/core';
import { JQ_TOKEN} from './jQuery.service';

@Component({
    selector:'carousel-popup',
    templateUrl:'./carousel-popup.component.html'
})

export class CarouselPopupComponent implements OnInit{
    //public imagesData:any[];
    @Input() imagesData:any[];
    @Input() carouselIndex:any;
    constructor( @Inject(JQ_TOKEN) private $ : any){

        
    }
    ngOnInit(){
         console.log("carouselIndex",this.carouselIndex);
    }
    openPopupModal(){
        this.$('#carousel-modal_'+this.carouselIndex).modal({
        })
    }
    
    clickMe(index){
        // this.imagesData = data.images;
        // setTimeout(() => {
        //     console.log("this.newDta2", data.images);
        //     this.openPopupModal();
        // }, 100);
        this.carouselIndex = index;
        console.log('this.carouselIndex',this.carouselIndex);
        this.$('#carousel-modal_'+index).modal({
        })
        
        
    }
}