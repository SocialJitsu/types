import { UUID, ISO8601DateTime } from './shared.js'

export type ViewStackModel = {
  label?: string
  summary?: string
}

export type ViewStackInput = {
  label?: string
  summary?: string
  content?: string
  options?: string
}

export type ViewOptions = {
  cache?: number // TTL in seconds
}

export type ViewContent = string

export type ViewModel = {
  id: UUID
  serviceId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label: string
  summary?: string
  content?: ViewContent
  options?: ViewOptions
}
