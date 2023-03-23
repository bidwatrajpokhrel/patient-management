import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { csvUploadInterceptor } from './file.interceptor';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
  constructor(private readonly filesService: FileService) {}

  @Post('upload')
  @UseInterceptors(csvUploadInterceptor())
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const result = await this.filesService.uploadFile(file);
      res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
}
