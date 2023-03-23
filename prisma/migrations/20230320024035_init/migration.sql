-- CreateTable
CREATE TABLE "Observation" (
    "id" SERIAL NOT NULL,
    "observation_date" TIMESTAMP(3) NOT NULL,
    "observation_time" TIMESTAMP(3) NOT NULL,
    "patient_ssn" TEXT NOT NULL,
    "hospital_id" INTEGER NOT NULL,
    "practitioner_id" INTEGER NOT NULL,
    "nurse_id" INTEGER NOT NULL,
    "medication_id" INTEGER NOT NULL,
    "remark_id" INTEGER NOT NULL,

    CONSTRAINT "Observation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "ssn" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "number1" TEXT NOT NULL,
    "number2" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "dod" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "bloodType" TEXT NOT NULL,
    "educationBackground" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("ssn")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Practitioner" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "number1" TEXT NOT NULL,
    "number2" TEXT NOT NULL,

    CONSTRAINT "Practitioner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nurse" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "number1" TEXT NOT NULL,

    CONSTRAINT "Nurse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medication" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "remark" TEXT NOT NULL,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObservationRemark" (
    "id" SERIAL NOT NULL,
    "remark" TEXT NOT NULL,

    CONSTRAINT "ObservationRemark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientHistory" (
    "id" SERIAL NOT NULL,
    "patient_ssn" TEXT NOT NULL,
    "update_date" TIMESTAMP(3) NOT NULL,
    "updated_field" TEXT NOT NULL,
    "old_value" TEXT NOT NULL,
    "new_value" TEXT NOT NULL,

    CONSTRAINT "PatientHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PractitionerHistory" (
    "id" SERIAL NOT NULL,
    "practitioner_id" INTEGER NOT NULL,
    "update_date" TIMESTAMP(3) NOT NULL,
    "updated_field" TEXT NOT NULL,
    "old_value" TEXT NOT NULL,
    "new_value" TEXT NOT NULL,

    CONSTRAINT "PractitionerHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NurseHistory" (
    "id" SERIAL NOT NULL,
    "nurse_id" INTEGER NOT NULL,
    "update_date" TIMESTAMP(3) NOT NULL,
    "updated_field" TEXT NOT NULL,
    "old_value" TEXT NOT NULL,
    "new_value" TEXT NOT NULL,

    CONSTRAINT "NurseHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_patient_ssn_fkey" FOREIGN KEY ("patient_ssn") REFERENCES "Patient"("ssn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_practitioner_id_fkey" FOREIGN KEY ("practitioner_id") REFERENCES "Practitioner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_nurse_id_fkey" FOREIGN KEY ("nurse_id") REFERENCES "Nurse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "Medication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_remark_id_fkey" FOREIGN KEY ("remark_id") REFERENCES "ObservationRemark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientHistory" ADD CONSTRAINT "PatientHistory_patient_ssn_fkey" FOREIGN KEY ("patient_ssn") REFERENCES "Patient"("ssn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PractitionerHistory" ADD CONSTRAINT "PractitionerHistory_practitioner_id_fkey" FOREIGN KEY ("practitioner_id") REFERENCES "Practitioner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseHistory" ADD CONSTRAINT "NurseHistory_nurse_id_fkey" FOREIGN KEY ("nurse_id") REFERENCES "Nurse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
