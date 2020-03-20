import { Module } from '@nestjs/common';

import { ServerEnvironmentModule } from '@hydrus-water-tools/server/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Module({
  imports: [ServerEnvironmentModule.register(environment)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
