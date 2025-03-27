import { IsString } from 'class-validator';

export class ControlsDto {
  @IsString()
  estado: string; // "ON" o "OFF"
}