import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
    declarations: [AppComponent, ActionsComponent], 
    imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
