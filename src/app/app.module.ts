import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GreetComponent } from './component/greet/greet.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormValidatonComponent } from './component/reactive-form-validaton/reactive-form-validaton.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    WelcomeComponent,
    LoginComponent,
    PipeComponent,
    TemplateDrivenFormComponent,
    ReactiveFormValidatonComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
