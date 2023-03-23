import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FileModule } from './file/file.module';
import { ObservationModule } from './observation/observation.module';
import { MedicationModule } from './medication/medication.module';
import { NurseModule } from './nurse/nurse.module';
import { PractitionerModule } from './practitioner/practitioner.module';
import { HospitalModule } from './hospital/hospital.module';
import { PatientModule } from './patient/patient.module';
import { ObservationsModule } from './observations/observations.module';
import { ObservationModule } from './observation/observation.module';

@Module({
  imports: [PrismaModule, FileModule, ObservationModule, ObservationsModule, PatientModule, HospitalModule, PractitionerModule, NurseModule, MedicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
