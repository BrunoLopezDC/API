import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Report extends Document {
  @Prop({ type: Number, required: true })
  Giroscopia: number;

  @Prop({ type: Number, required: true })
  Accelerometry: number;

  @Prop({ type: Boolean, default: false })
  esCaida: boolean;

  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop({ type: Number, required: true })
  userId: number;
}

export const ReportSchema = SchemaFactory.createForClass(Report);