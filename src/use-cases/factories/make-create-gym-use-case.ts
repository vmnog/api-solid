import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'

export function makeCreateGymUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const getUserProfileUseCase = new FetchNearbyGymsUseCase(gymsRepository)

  return getUserProfileUseCase
}
