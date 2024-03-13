import { Gym, Prisma } from '@prisma/client'
import { FindManyNearbyParams, GymsRepository } from '../gyms-repository'
import { randomUUID } from 'node:crypto'
import { getDistanceInKilometersBetweenCoordinates } from '@/utils/get-distance-between-two-coordinates'

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findManyNearby(params: FindManyNearbyParams): Promise<Gym[]> {
    return this.items.filter((item) => {
      const distanceInKilometers = getDistanceInKilometersBetweenCoordinates(
        {
          latitude: params.latitude,
          longitude: params.longitude
        },
        {
          latitude: item.latitude.toNumber(),
          longitude: item.longitude.toNumber(),
        }
      )
      const MAX_DISTANCE_IN_KILOMETERS = 10

      return distanceInKilometers < MAX_DISTANCE_IN_KILOMETERS   
    })
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    return this.items
      .filter((item) => item.title.includes(query))
      .slice((page - 1) * 20, page * 20)
  }

  async create(data: Prisma.GymCreateInput): Promise<Gym | null> {
    const gym = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null,
      phone: data.phone ?? null,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
    }

    this.items.push(gym)

    return gym
  }

  async findById(id: string): Promise<Gym | null> {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }
}
