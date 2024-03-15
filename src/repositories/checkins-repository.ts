import { Prisma, CheckIn } from '@prisma/client'

export interface CheckInsRepository {
  save(data: Prisma.CheckInUncheckedUpdateInput): Promise<CheckIn>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findById(id: string): Promise<CheckIn | null>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  findManyByUserId(userId: string, page?: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
}
