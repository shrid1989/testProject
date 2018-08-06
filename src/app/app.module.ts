import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { JQ_TOKEN } from './products/common/jQuery.service';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ProductThumbnailComponent } from './products/product-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { appRoutes } from './routes';
import { CarouselPopupComponent } from './products/common/carousel-popup.component';
import { ModalTriggerDirective } from './products/common/modalTrigger.directive';
import { CustomInterceptor, DataService } from './products/shared/data.service';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductThumbnailComponent,
    NavBarComponent,
    ProductDetailsComponent,
    CarouselPopupComponent,
    ModalTriggerDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true,
        },
    { provide: JQ_TOKEN, useValue:jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
