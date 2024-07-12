import { MiscService } from './misc.service';
import { MiscController } from './misc.controller';
import { XmlService } from './services';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [MiscService, XmlService],
  controllers: [MiscController]
})
export class MiscModule {}
