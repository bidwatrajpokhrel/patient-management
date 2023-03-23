import { Injectable } from '@nestjs/common';
import { REQUIRED_CSV_HEADERS } from 'src/constant/uploadedCSV';
import { validateAndParseCsv } from 'src/util/file';
import { FileNormalizer } from './file.normaliser';
import { FileParser } from './file.parser';

@Injectable()
export class FileService {
  constructor(
    private readonly fileParser: FileParser,
    private readonly fileNormalizer: FileNormalizer,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    if (!file) {
      throw new Error('No file submitted');
    }

    const results = await validateAndParseCsv(
      file.path,
      REQUIRED_CSV_HEADERS,
    ).catch((error) => {
      throw new Error(`File processing failed: ${error.message}`);
    });

    const parsedResults = this.fileParser.parseRawDataArray(results);
    const normalisedResults =
      this.fileNormalizer.getNormalizedData(parsedResults);

    return { message: 'File uploaded successfully', data: normalisedResults };
  }
}
