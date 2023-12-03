import { DynamicForm } from './form.js'
import { ISO8601DateTime, ObjectHash, UUID } from './shared.js'

export type ServiceSettings = DynamicForm

export interface ServiceParameters {
  [k: string]: string
}

export type ServiceModel = {
  id: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label: string
  summary?: string
  description?: string
  parameters: ServiceParameters
  settings?: ServiceSettings
  domain?: ServiceDomain
  stack?: ServiceStackData
}

export type ServiceDomain = string

export type ServiceStackModel = {
  label?: string
  summary?: string
  description?: string
  parameters?: ServiceParameters
  settings?: ServiceSettings
  domain?: ServiceDomain
}

export interface ServiceStackData {
  deployedAt?: ISO8601DateTime
  hash: ObjectHash
}

export type ServiceStackInput = {
  label?: string
  summary?: string
  description?: string
  parameters?: string
  settings?: string
}
