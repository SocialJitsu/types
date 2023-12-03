import { Data, HTTPHeaders, StringMap, UUID } from './shared.js'

export type ActionContext = {
  query: ContextQuery
  payload: ContextPayload
  parameters: ContextParameters
  headers: HTTPHeaders
  loops: ActionContextLoop[]
  config: ActionContextConfig
}

export type ContextQuery = StringMap

export type ContextParameters = Data

export type ActionContextLoop = {
  index: number
}

export type ContextPayload = Data

export type ActionContextConfig = {
  accountId: UUID
  processId: UUID
  workflowId: UUID
  serviceId: UUID
}
