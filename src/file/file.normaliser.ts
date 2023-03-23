import { Injectable } from '@nestjs/common';
import { hasNonEmptyValue } from 'src/util/object';

@Injectable()
export class FileNormalizer {
  getNormalizedData(parsedRowDataArray: ParsedRowData[]): ParsedRowData[] {
    const normalizedDataArray: ParsedRowData[] = parsedRowDataArray.reduce(
      (
        accumulatedRowDataArray: ParsedRowData[],
        rowData: ParsedRowData,
      ): ParsedRowData[] => {
        if (rowData.index === 0) {
          accumulatedRowDataArray.push(rowData);
          return accumulatedRowDataArray;
        }

        const prevRowData =
          accumulatedRowDataArray[accumulatedRowDataArray.length - 1];

        const observation = rowData.observation;
        const patient = hasNonEmptyValue(rowData.patient)
          ? rowData.patient
          : prevRowData.patient;
        const hospital = hasNonEmptyValue(rowData.hospital)
          ? rowData.hospital
          : prevRowData.hospital;
        const practitioner = hasNonEmptyValue(rowData.practitioner)
          ? rowData.practitioner
          : prevRowData.practitioner;
        const nurse = hasNonEmptyValue(rowData.nurse)
          ? rowData.nurse
          : prevRowData.nurse;
        const medication = hasNonEmptyValue(rowData.medication)
          ? rowData.medication
          : prevRowData.medication;

        accumulatedRowDataArray.push({
          observation,
          patient,
          hospital,
          practitioner,
          nurse,
          medication,
          index: rowData.index,
        });

        return accumulatedRowDataArray;
      },
      [],
    );

    return normalizedDataArray;
  }
}
