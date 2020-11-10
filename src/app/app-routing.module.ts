import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssFrameworksComponent } from './css-frameworks/css-frameworks.component';
import { FrontendDevelopmentComponent } from './frontend-development/frontend-development.component';
import { JsFrameworksComponent } from './js-frameworks/js-frameworks.component';
import { QuizComponent } from './quiz/quiz.component';
import { SkillsComponent } from './skills/skills.component';
import { TextEditorsComponent } from './text-editors/text-editors.component';

const routes: Routes = [
  { path: 'frontend-development', component: FrontendDevelopmentComponent },
  { path: 'css-frameworks', component: CssFrameworksComponent },
  { path: 'js-frameworks', component: JsFrameworksComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'text-editors', component: TextEditorsComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
