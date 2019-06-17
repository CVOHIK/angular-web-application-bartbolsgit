import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { DatamanagerComponent } from './datamanager/datamanager.component';
import { FindMeComponent } from './find-me/find-me.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatamanagerComponent,
    FindMeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w' + '&libraries=visualization'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
