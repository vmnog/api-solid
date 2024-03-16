import { SearchGymUseCase } from '../search-gym'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const getUserProfileUseCase = new SearchGymUseCase(gymsRepository)

  return getUserProfileUseCase
}
