import { Action } from './action.js'
import { ISO8601DateTime, UUID } from './shared.js'

export type WorkflowStackModel = {
  label?: string
  hasWebhook?: boolean
  summary?: string
  definition: WorkflowDefinition
}

export interface WorkflowDefinition {
  [k: string]: Action
}

export type WorkflowStackInput = {
  label?: string
  summary?: string
  definition?: string
}

export type WorkflowModel = {
  id: UUID
  serviceId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label: string
  summary?: string
  definition: WorkflowDefinition
}
