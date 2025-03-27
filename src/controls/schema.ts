import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ControlsDocument = Controls & Document;

@Schema({ timestamps: true })
export class Controls {
  @Prop({ required: true })
  estado: string; // "ON" o "OFF"
}

export const ControlsSchema = SchemaFactory.createForClass(Controls);