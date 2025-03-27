import { Controller, Get, Post, Body } from '@nestjs/common';
import { ControlsService } from './controls.service';
import { ControlsDto } from './dto'
// import { Public } from '../auth/decorators/public.decorator';  // 🔹 Importar el decorador


@Controller('api/controls')
export class ControlsController {
  constructor(private readonly ControlsService: ControlsService) {}
//  @Public()
  @Get()
  async obtenerEstado(): Promise<string> {
    return this.ControlsService.obtenerEstado();
  }

 // @Public()
  @Post()
  async cambiarEstado(@Body() ControlDto: ControlsDto): Promise<string> {
    return this.ControlsService.cambiarEstado(ControlDto.estado);
  }
}