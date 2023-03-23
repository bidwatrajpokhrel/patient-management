import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';

import { getCurrentTimestampString, getRandomName } from 'src/util/string';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const csvUploadInterceptor = () =>
  FileInterceptor('file', {
    storage: diskStorage({
      destination: generateStorageDestination,
      filename: generateFileName,
    }),
  });

const generateStorageDestination = (
  request: Request,
  file: Express.Multer.File,
  callback: DestinationCallback,
): void => {
  callback(null, './uploads');
};

const generateFileName = (
  req: Request,
  file: Express.Multer.File,
  callback: FileNameCallback,
) => {
  callback(
    null,
    `${getCurrentTimestampString()}-${getRandomName()}${extname(
      file.originalname,
    )}`,
  );
};
