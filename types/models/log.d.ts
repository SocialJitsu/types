import { ActionType } from './action.js'
import { ActionContext } from './context.js'
import { ActionResponseResult, ActionResponseStatus } from './response.js'
import { ISO8601DateTime, UUID } from './shared.js'

export type LogModel = {
  id: UUID
  serviceId: UUID
  processId: UUID
  callerId: UUID
  actionId: UUID
  workflowId: UUID
  status: ActionResponseStatus
  result: ActionResponseResult
  context: ActionContext
  runtime: number
  execution: number
  name: string
  type: ActionType
  triggeredAt?: ISO8601DateTime
  timeToLive?: number
  watch?: boolean
}
