import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { BarComponent } from './components/bar/bar.component';
import { BoardComponent } from './components/board/board.component';
import { ColumnFieldComponent } from './components/column-field/column-field.component';
import { ColumnComponent } from './components/column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BarComponent,
    BoardComponent,
    ColumnFieldComponent,
    ColumnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
