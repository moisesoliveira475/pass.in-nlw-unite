import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'bb8a0215-9e1a-4037-b801-62e35ccbab8c',
      title: 'Unite summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})