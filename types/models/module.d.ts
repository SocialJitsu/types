import { Meta, ModuleScope } from '../graphql/schema.js'
import { ActionResponseResult, ActionResponseStatus } from './response.js'
import { ISO8601DateTime, URL, UUID } from './shared.js'

export type ModuleOptions = {
  [x: string]: string | number | undefined | boolean | Date | ModuleOptions | JsonArray
}

export type JsonArray = (string | number | boolean | ModuleOptions | JsonArray)[]

export type ModuleResponse =
  | ActionResponseResult
  | {
      status: ActionResponseStatus
      result?: ActionResponseResult
      events?: ModuleResponseEvents
    }

// Module input parameters
export interface OptionSchema {
  type: 'string' | 'number' | 'boolean'
  required?: boolean
}

export interface OptionsSchema {
  [key: string]: OptionSchema
}
// Custom error codes returned { some_event: 'Some description', ... }
export interface ModuleEventDefinitions {
  [key: string]: {
    description?: string
  }
}
export type ModuleResponseEvents = Array<ModuleResponseEvent>

export type ModuleResponseEvent = {
  code: string
  msg?: string
}

// export enum ModuleScope {
//   PRIVATE = "private",
//   SECRET = "secret",
//   PUBLIC = "public",
// }

export type ModuleModel = {
  accountId: UUID
  moduleId: UUID
  updatedAt?: ISO8601DateTime
  createdAt?: ISO8601DateTime
  deployedAt?: ISO8601DateTime
  scope: ModuleScope
  label: string
  summary?: string
  description?: string
  reference?: string
  repository?: URL
  source?: string
  hash?: string // Commit hash
  meta?: Meta
  options?: OptionsSchema
  events?: ModuleEventDefinitions
}
