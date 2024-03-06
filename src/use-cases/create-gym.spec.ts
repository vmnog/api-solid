import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('CreateGym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to CreateGym', async () => {
    const { gym } = await sut.execute({
      title: 'Create Gym',
      description: null,
      phone: null,
      latitude: -23.572995,
      longitude: -48.042301,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
