import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('api/reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  async create(@Body() createReportDto: CreateReportDto) {
    console.log(createReportDto);
    return this.reportsService.create(createReportDto);
  }

  @Get('/user/:userId')
  async findByUser(@Param('userId') userId: number) {
    return this.reportsService.findByUser(userId);
  }

  @Get()
  async findAll() {
    return this.reportsService.findAll();
  }
  
}