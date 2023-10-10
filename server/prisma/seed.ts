const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      citizenId: '1234567890123',
      citizenBack: '9876543210987',
      profileImage: 'profile.jpg',
      prefix: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '1234567890',
      password: 'hashed_password',
      bloodType: 'A_POSITIVE',
      dob: new Date('1990-01-15T00:00:00Z'),
      gender: 'MALE',
      weight: 70.5,
      height: 175.2,
      disease: null,
      address: {
        create: {
          houseNo: '123',
          moo: '4',
          soi: 'Main Street',
          subDistrict: 'Subdistrict',
          district: 'District',
          province: 'Province',
          country: 'Country',
          postcode: '12345',
        },
      },
      donationHistory: {
        create: [
          {
            blood_type: 'A_POSITIVE',
            status: 'APPOINTED',
          },
        ],
      },
      post: {
        create: [
          {
            image: 'post1.jpg',
            description: 'Looking for blood donation',
            phone_number: '9876543210',
            bloodType: 'A_POSITIVE',
            case: 'NORMAL',
          },
        ],
      },
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
