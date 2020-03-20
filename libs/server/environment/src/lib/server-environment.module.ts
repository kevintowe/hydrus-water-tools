import { Module, Global, DynamicModule, Provider } from '@nestjs/common';

export interface Environment {
  production: boolean;
}

@Global()
@Module({
  providers: [],
  exports: []
})
export class ServerEnvironmentModule {
  static register(env: Environment): DynamicModule {
    const environmentProvider = {
      provide: 'Environment',
      useValue: env
    } as Provider<Environment>;
    return {
      module: ServerEnvironmentModule,
      providers: [environmentProvider],
      exports: [environmentProvider]
    };
  }
}
