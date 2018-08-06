import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product'
import { DataService} from '../shared/data.service'

@Component({
    templateUrl:'./product-details.component.html',
    styles:[`
        .container { padding-left: 20px; padding-right: 20px;}  ,
        .product-image { height: 100px;}  
    `]
})
export class ProductDetailsComponent implements OnInit{
    
    product:any;
    constructor(private route: ActivatedRoute){
    }
    ngOnInit(){
        //this.product = this.DataService.getProduct(this.route.snapshot.params['id']);
    }
}