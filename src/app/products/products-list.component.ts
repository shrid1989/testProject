import { Component, OnInit } from "@angular/core";
import { DataService } from './shared/data.service';
import { IProduct } from './product-details/product'

@Component({
    template: `
        <div>
            <h1>Latest Products</h1>
            <hr/>
            <div class="row">
                <div class="col-md-5" *ngFor="let productData of productsData let index = index">
                    <product-thumbnail [productIndex]="index"  [product]="productData">
                        
                    </product-thumbnail>
                </div>
            </div>
        </div>
    `

})
export class ProductsListComponent implements OnInit{
    productsData:IProduct[];
    constructor(private dataService: DataService){
    }
    ngOnInit(){
         this.dataService
        .getAll<IProduct[]>()
            .subscribe((data: any) => {
                this.productsData  = data.groups;
                console.log('data', data);
            },
            error => () => {
                console.log('error', 'Damn', 'Something went wrong...');
            },
            () => {
                console.log('success', 'Complete', 'Getting all values complete');
            });
            
    }
}