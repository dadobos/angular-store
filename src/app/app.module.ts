import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FiltersComponent,
		ProductsHeaderComponent,
		ProductBoxComponent,
		CartComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		MatBadgeModule,
		MatButtonModule,
		MatCardModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatTableModule,
		MatToolbarModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'de-DE',
		},
		CartService,
		StoreService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
