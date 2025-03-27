import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Report } from './schemas/report.schema';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {}

  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }
  async create(createReportDto: CreateReportDto): Promise<Report> {
    console.log(createReportDto);
    const createdReport = new this.reportModel(createReportDto);
    return createdReport.save();
  }

  async findByUser(userId: number): Promise<Report[]> {
    return this.reportModel.find({ userId }).exec();
  }
}