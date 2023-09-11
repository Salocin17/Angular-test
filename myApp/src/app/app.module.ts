import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { HeaderComponent } from './header/header.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompareComponent } from './compare/compare.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    HeaderComponent,
    CardInfoComponent,
    SearchFilterPipe,
    CompareComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
