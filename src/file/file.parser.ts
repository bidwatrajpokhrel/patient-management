import { Injectable } from '@nestjs/common';
import { convertToDate } from 'src/util/date';

@Injectable()
export class FileParser {
  parseRawDataArray(rawData: RawRowData[]): ParsedRowData[] {
    return rawData.map((rawRowData) => this.parseRawRowData(rawRowData));
  }

  parseRawRowData(rawRowData: RawRowData): ParsedRowData {
    const parsedRowData: ParsedRowData = {
      observation: this.parseObservationData(rawRowData),
      patient: this.parsePatientData(rawRowData),
      hospital: this.parseHospitalData(rawRowData),
      practitioner: this.parsePractitionerData(rawRowData),
      nurse: this.parseNurseData(rawRowData),
      medication: this.parseMedicationData(rawRowData),
      index: rawRowData.index,
    };

    return parsedRowData;
  }

  parseObservationData(rawRowData: RawRowData): Observation {
    const observation: Observation = {
      id: rawRowData.observationId,
      date: rawRowData.observationDate,
      time: rawRowData.observationTime,
      remark: rawRowData.observationRemark,
    };

    return observation;
  }

  parsePatientData(rawRowData: RawRowData): Patient {
    const patient: Patient = {
      ssn: rawRowData.patientSsn,
      firstName: rawRowData.patientFirstName,
      lastName: rawRowData.patientLastName,
      country: rawRowData.patientCountry,
      address1: rawRowData.patientAddress1,
      address2: rawRowData.patientAddress2,
      number1: rawRowData.patientNumber1,
      number2: rawRowData.patientNumber2,
      sex: rawRowData.patientSex,
      dob: !rawRowData.patientDOB
        ? null
        : convertToDate(rawRowData.patientDOB, 'MM/dd/yyyy'),
      dod: !rawRowData.patientDOD
        ? null
        : convertToDate(rawRowData.patientDOD, 'dd/MM/yyyy'),
      email: rawRowData.patientEmail,
      height: Number.parseFloat(rawRowData.patientHeight),
      weight: Number.parseFloat(rawRowData.patientWeight),
      bloodType: rawRowData.patientBloodType,
      educationBackground: rawRowData.patientEducationBackground,
      occupation: rawRowData.patientOccupation,
    };

    return patient;
  }

  parseHospitalData(rawRowData: RawRowData): Hospital {
    const hospital: Hospital = {
      id: rawRowData.hospitalId,
      name: rawRowData.hospitalName,
      address: rawRowData.hospitalAddress,
      number: rawRowData.hospitalNumber,
      email: rawRowData.hospitalEmail,
    };

    return hospital;
  }

  parsePractitionerData(rawRowData: RawRowData): Practitioner {
    const practitioner: Practitioner = {
      id: rawRowData.practitionerId,
      firstName: rawRowData.practitionerFirstName,
      lastName: rawRowData.practitionerLastName,
      address1: rawRowData.practitionerAddress1,
      address2: rawRowData.practitionerAddress2,
      number1: rawRowData.practitionerNumber1,
      number2: rawRowData.practitionerNumber2,
    };

    return practitioner;
  }

  parseNurseData(rawRowData: RawRowData): Nurse {
    const nurse: Nurse = {
      id: rawRowData.nurseId,
      firstName: rawRowData.nurseFirstName,
      lastName: rawRowData.nurseLastName,
      address1: rawRowData.nurseAddress1,
      address2: rawRowData.nurseAddress2,
      number1: rawRowData.nurseNumber1,
    };

    return nurse;
  }

  parseMedicationData(rawRowData: RawRowData): Medication {
    const medication: Medication = {
      id: rawRowData.medicationId,
      name: rawRowData.medicationName,
      company: rawRowData.medicationCompany,
      level: rawRowData.medicationLevel,
      remark: rawRowData.medicationRemark,
    };
    return medication;
  }
}
