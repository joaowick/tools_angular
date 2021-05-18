import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { IconAnimationComponent } from './components/tools/icon-animation/icon-animation.component';
import { ToolsRoutingModule } from './components/tools/tools-routing.module';
import { DarkmodeswitchComponent } from './components/tools/darkmodeswitch/darkmodeswitch.component';
import { PaifilhoComponent } from './components/tools/paifilho/paifilho.component';
import { PaiComponent } from './components/tools/paifilho/pai/pai.component';
import { FilhoComponent } from './components/tools/paifilho/filho/filho.component';
import { PaifilhoRoutingModule } from './components/tools/paifilho/paifilho-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    IconAnimationComponent,
    DarkmodeswitchComponent,
    PaifilhoComponent,
    PaiComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolsRoutingModule,
    PaifilhoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
