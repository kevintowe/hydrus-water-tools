import { NgModule, ModuleWithProviders } from '@angular/core';

export interface Environment {
  production: boolean;
}

@NgModule({})
export class HydrusUserPortalEnvironmentModule {
  static forRoot(env: Environment) {
    return {
      ngModule: HydrusUserPortalEnvironmentModule,
      providers: [
        {
          provide: 'Environment',
          useValue: env
        }
      ]
    } as ModuleWithProviders<HydrusUserPortalEnvironmentModule>;
  }
}
