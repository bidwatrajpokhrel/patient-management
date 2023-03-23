import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { FileParser } from './file.parser';
import { FileNormalizer } from './file.normaliser';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [FileController],
  providers: [FileService, FileParser, FileNormalizer],
  exports: [FileService],
})
export class FileModule {}
