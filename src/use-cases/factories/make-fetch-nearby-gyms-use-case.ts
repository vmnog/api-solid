import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const getUserProfileUseCase = new FetchNearbyGymsUseCase(gymsRepository)

  return getUserProfileUseCase
}
