import { ISO8601DateTime, UUID } from './shared.js'

export type ParameterModel = {
  id: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  key: string
  value: string
  summary?: string
}
