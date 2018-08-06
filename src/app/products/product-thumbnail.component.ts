import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "./product-details/product";

@Component({
    selector:'product-thumbnail',
    template: `
    <carousel-popup [imagesData]="product.images" [carouselIndex]="productIndex">
    </carousel-popup>
        <div class="well hoverwell thumbnail">
            <div modal-trigger [pIndex]="productIndex"><img [src]="product.hero.href" height="100" width="100"></div>
            <h4>{{product.name}}</h4>
            <div>Price Range: {{product.priceRange.selling.low}}-{{product.priceRange.selling.high}}</div>
        </div>
    `,
    styles:[`
        .thumbnail {min-height: 225px;}
        .pad-left { margin-left :10px;},
        .well div {color: #bbb;}
    `]
})

export class ProductThumbnailComponent implements OnInit{
@Input() product: IProduct;
@Input() productIndex: number;
    ngOnInit(){
        console.log("productIndex", this.productIndex);
    }
}