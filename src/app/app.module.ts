import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
