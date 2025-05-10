import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,// Add HttpClientModule here
  ],
  providers: [HttpClient]
})
export class AppModule { }
