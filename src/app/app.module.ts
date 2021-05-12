import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { IconAnimationComponent } from './components/tools/icon-animation/icon-animation.component';
import { ToolsRoutingModule } from './components/tools/tools-routing.module';
import { DarkmodeswitchComponent } from './components/tools/darkmodeswitch/darkmodeswitch.component';
import { StepprogressbarComponent } from './components/tools/stepprogressbar/stepprogressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    IconAnimationComponent,
    DarkmodeswitchComponent,
    StepprogressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
