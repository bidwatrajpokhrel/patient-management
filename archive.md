# schema.prisma

```prisma
model Observation {
  id             Int          @id @default(autoincrement())
  date           DateTime
  time           DateTime
  remark         String?
  patient        Patient      @relation(fields: [patientId], references: [id])
  patientId      Int
  practitioner   Practitioner @relation(fields: [practitionerId], references: [id])
  practitionerId Int
  hospital       Hospital     @relation(fields: [hospitalId], references: [id])
  hospitalId     Int
  medication     Medication   @relation(fields: [medicationId], references: [id])
  medicationId   Int
  nurse          Nurse?       @relation(fields: [nurseId], references: [id])
  nurseId        Int?
}

model Patient {
  id                   Int           @id @default(autoincrement())
  socialSecurityNumber String
  firstName            String
  lastName             String
  sex                  String
  dateOfBirth          DateTime
  dateOfDiagnosis      DateTime
  weight               Float
  bloodType            String
  educationBackground  String
  occupation           String
  address              Address       @relation(fields: [addressId], references: [id])
  addressId            Int
  contact              Contact       @relation(fields: [contactId], references: [id])
  contactId            Int
  Observation          Observation[]
}

model Hospital {
  id          Int           @id @default(autoincrement())
  name        String
  address     Address       @relation(fields: [addressId], references: [id])
  addressId   Int
  contact     Contact       @relation(fields: [contactId], references: [id])
  contactId   Int
  Observation Observation[]
}

model Practitioner {
  id          Int           @id @default(autoincrement())
  firstName   String
  lastName    String
  address     Address       @relation(fields: [addressId], references: [id])
  addressId   Int
  contact     Contact       @relation(fields: [contactId], references: [id])
  contactId   Int
  Observation Observation[]
}

model Nurse {
  id          Int           @id @default(autoincrement())
  firstName   String
  lastName    String
  address     Address       @relation(fields: [addressId], references: [id])
  addressId   Int
  contact     Contact       @relation(fields: [contactIId], references: [id])
  contactIId  Int
  Observation Observation[]
}

model Medication {
  id          Int           @id @default(autoincrement())
  name        String
  company     String
  level       String
  remark      String
  Observation Observation[]
}

model Address {
  id                Int            @id @default(autoincrement())
  address1          String
  address2          String?
  country           String
  previousAddress   Address?       @relation(fields: [previousAddressId], references: [id])
  previousAddressId Int?
  addressHolderType String
  addressHolderId   Int

}

model Contact {
  id                         Int            @id @default(autoincrement())
  number1                    String
  number2                    String?
  email                      String
  // previousContactNumber      Contact?       @relation(fields: [previous_contact_number_id], references: [id])
  previous_contact_number_id Int?
  contactNumberHolderType    String
  contactNumberHolderId      Int
}

model Attendance {
  id                   Int      @id @default(autoincrement())
  checkIn              DateTime
  checkOut             DateTime
  date                 DateTime
  attendanceHolderType String
  attendanceHolderId   Int
}
```
