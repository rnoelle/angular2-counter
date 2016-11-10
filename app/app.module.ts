import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
      AppComponent,
      CounterComponent
    ],
  bootstrap: [ AppComponent ]

})

export class AppModule {
  
}
