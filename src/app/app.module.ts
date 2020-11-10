import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FrontendDevelopmentComponent } from './frontend-development/frontend-development.component';
import { JsFrameworksComponent } from './js-frameworks/js-frameworks.component';
import { SkillsComponent } from './skills/skills.component';
import { CssFrameworksComponent } from './css-frameworks/css-frameworks.component';
import { TextEditorsComponent } from './text-editors/text-editors.component';
import { QuizComponent } from './quiz/quiz.component';
import { FooterComponent } from './footer/footer.component';
import { InMemoryDataService } from './service/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FrontendDevelopmentComponent,
    JsFrameworksComponent,
    SkillsComponent,
    CssFrameworksComponent,
    TextEditorsComponent,
    QuizComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 200 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
