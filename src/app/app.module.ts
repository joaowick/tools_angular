import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { CustomScrollComponent } from './component/tools/custom-scroll/custom-scroll.component';
import { CustomScrollbarComponent } from './components/tools/custom-scrollbar/custom-scrollbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    CustomScrollComponent,
    CustomScrollbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
