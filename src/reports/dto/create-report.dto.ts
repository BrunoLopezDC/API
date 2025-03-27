import { IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  Giroscopia: number;

  @IsNumber()
  Accelerometry: number;

  @IsBoolean()
  @IsOptional()
  esCaida?: boolean;

  @IsNumber()
  userId: number;
}