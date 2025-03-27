import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControlsController } from './controls.controller';
import { ControlsService } from './controls.service'
import { Controls, ControlsSchema } from './schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Controls.name, schema: ControlsSchema }]),
  ],
  controllers: [ControlsController],
  providers: [ControlsService],
})
export class ControlModule {}