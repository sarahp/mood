// import type { User } from '@clerk/nextjs/api'
import { prisma } from './db'
import { useAuth } from '@clerk/clerk-react'

export const getUserFromClerkID = async (select = { id: true }) => {
  const { userId } = useAuth()
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
    select,
  })

  return user
}

// export const syncNewUser = async (clerkUser: User) => {
//   const existingUser = await prisma.user.findUnique({
//     where: {
//       clerkId: clerkUser.id,
//     },
//   })

//   if (!existingUser) {
//     const email = clerkUser.emailAddresses[0].emailAddress
//     // const { subscriptionId, customerId } = await createAndSubNewCustomer(email)

//     await prisma.user.create({
//       data: {
//         clerkId: clerkUser.id,
//         email,
//         account: {
//           create: {
//             // stripeCustomerId: customerId,
//             // stripeSubscriptionId: subscriptionId,
//           },
//         },
//       },
//     })
//   }
// }