import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { Environment } from '@hydrus-water-tools/server/environment';

@Controller()
export class AppController {
  constructor() {}
}
