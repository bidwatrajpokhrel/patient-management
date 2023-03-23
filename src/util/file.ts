import { createReadStream } from 'fs';
import * as csvParser from 'csv-parser';
import { snakeToCamel } from './string';

export const validateAndParseCsv = async (
  filePath: string,
  requiredHeaders: string[],
): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results = [];

    const readStream = createReadStream(filePath);

    let index = 0;

    readStream
      .pipe(
        csvParser({
          mapHeaders: ({ header }) => snakeToCamel(header),
          maxRowBytes: 1024 * 1024 * 1024,
        }),
      )
      .on('headers', (headers: string[]) => {
        if (!validateCsvHeaders(headers, requiredHeaders))
          reject(new Error('Invalid Headers.'));
      })
      .on('data', (data: Object) => results.push({ ...data, index: index++ }))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

export const validateCsvHeaders = (
  csvHeaders: string[],
  requiredHeaders: string[],
): boolean => {
  const csvHeaderSet = new Set(csvHeaders);
  const requiredHeaderSet = new Set(
    requiredHeaders.map((header) => snakeToCamel(header)),
  );
  for (const requiredHeader of requiredHeaderSet) {
    if (!csvHeaderSet.has(requiredHeader)) {
      return false;
    }
  }
  return true;
};
