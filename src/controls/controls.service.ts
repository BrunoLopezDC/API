import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Controls, ControlsDocument } from './schema'

@Injectable()
export class ControlsService {
  constructor(@InjectModel(Controls.name) private controlsModel: Model<ControlsDocument>) {}

  async obtenerEstado(): Promise<string> {
    const estadoActual = await this.controlsModel.findOne().sort({ createdAt: -1 });
    return estadoActual ? estadoActual.estado : 'OFF';
  }

  async cambiarEstado(estado: string): Promise<string> {
    await this.controlsModel.create({ estado });
    return `Estado cambiado a ${estado}`;
  }
}