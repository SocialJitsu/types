import { ISO8601DateTime, ObjectLiteral, UUID } from './shared.js'

export type ItemData = ObjectLiteral | null

export type ItemModel = {
  id: UUID
  collectionId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  data: ItemData
}
