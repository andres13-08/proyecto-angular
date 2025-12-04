import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { rootReducer } from './core/store';
import { AuthEffects } from './core/store/auth/auth.effects';
import { AlumnosModule } from './featured/alumnos/alumnos.module';
import { AuthModule } from './featured/auth/auth.module';
import { CursosModule } from './featured/cursos/cursos.module';
import { DashboardModule } from './featured/dashboard/dashboard-module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    AlumnosModule,
    AuthModule,
    CursosModule,
    DashboardModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}