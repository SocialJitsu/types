import { PublicEvent } from './events.js'
import { ItemData } from './item.js'
import { ModuleOptions } from './module.js'
import { ActionResponseResult } from './response.js'
import { Email, URL, JSONQuery, UUID } from './shared.js'

export type ActionTypeName = `${ActionType}`

export type ActionName = string

// Result payload that may contain $ replacement path in which to place the action output
export type ParameterOutputTransformation =
  | string
  | ActionResponseResult
  | undefined

// Dot string path indicating where in context the action result will be placed - omit for replace, false for discard
export type ParameterResultPath = string | undefined

export enum ActionType {
  DECISION = 'decision', // switch statement
  ECHO = 'echo', // Test module that returns payload
  EVENT = 'event', // Fire custom event
  LOOP = 'loop', // Loop
  MERGE = 'merge', // Merge two workflow sequences
  MOCK = 'mock', // Match and mock data
  MODULE = 'module', // Custom lambda
  NOTIFY = 'notify', // Email notification
  QUERY = 'query', //  SocialJitsu GraphQL API
  REFERRER = 'referrer', // Block/allow access based on referer
  REQUEST = 'request', // Perform REST API requests
  RETURN = 'return', //  Async container return
  SEARCH = 'search', // Search data in DB
  STORE = 'store', // Store data in DB
  SCRIPT = 'script', // Inline code
  SPLIT = 'split', // Split workflow
  START = 'start', // Start workflow
  TEMPLATE = 'template', // Liquid template engine
  TOKEN = 'token', // Block/allow access based on token
  TRANSFORM = 'transform', // JSONata data transform
  VIEW = 'view', // Output a composed view
  WAIT = 'wait' // Pause workflow
}

export type ActionParameters =
  | DecisionActionParameters
  | EchoActionParameters
  | EventActionParameters
  | LoopActionParameters
  | MergeActionParameters
  | MockActionParameters
  | ModuleActionParameters
  | NotifyActionParameters
  | QueryActionParameters
  | ReferrerActionParameters
  | RequestActionParameters
  | ReturnActionParameters
  | SearchActionParameters
  | StoreActionParameters
  | ScriptActionParameters
  | SplitActionParameters
  | StartActionParameters
  | TemplateActionParameters
  | TokenActionParameters
  | TransformActionParameters
  | ViewActionParameters
  | WaitActionParameters

export type ActionParametersMap = {
  decision: DecisionActionParameters
  echo: EchoActionParameters
  event: EventActionParameters
  loop: LoopActionParameters
  merge: MergeActionParameters
  mock: MockActionParameters
  module: ModuleActionParameters
  notify: NotifyActionParameters
  query: QueryActionParameters
  referrer: ReferrerActionParameters
  request: RequestActionParameters
  return: ReturnActionParameters
  search: SearchActionParameters
  store: StoreActionParameters
  script: ScriptActionParameters
  split: SplitActionParameters
  start: StartActionParameters
  template: TemplateActionParameters
  token: TokenActionParameters
  transform: TransformActionParameters
  view: ViewActionParameters
  wait: WaitActionParameters
}

export interface DecisionActionParameters {
  conditions: DecisionCondition[]
  fallback?: ActionName
  next?: ActionName // Not for user - we populate this programically based on decision
}

export interface DecisionCondition {
  test: string
  action: ActionName
}

export interface EchoActionParameters {
  payload: unknown
  next?: ActionName
  result?: ParameterResultPath
  output?: ParameterOutputTransformation
}

export interface EventActionParameters {
  payload: unknown
  event: string
  next?: ActionName
}

export interface LoopActionParameters {
  count: number
  next?: ActionName
}

export interface MergeActionParameters {
  next?: ActionName
}

export interface MockActionParameters {
  next?: ActionName
  result?: ParameterResultPath
  mocks: {
    match: JSONQuery
    response: ActionResponseResult
  }[]
}

// These need to move to action handlers
export interface ModuleActionParameters {
  id: UUID
  options?: ModuleOptions
  proxy?: {
    active: boolean
    url: URL
  }
  next?: ActionName
  result?: ParameterResultPath
  output?: ParameterOutputTransformation
}

export interface NotifyActionParameters {
  recipient: Email
  html?: string
  text?: string
  subject: string
  next?: ActionName
}

export interface QueryActionParameters {
  query: string
  variables?: Record<string, unknown>
  endpoint?: URL
  headers?: Record<string, string>
  result?: ParameterResultPath
  output?: ParameterOutputTransformation
  next?: ActionName
}

export interface ReferrerActionParameters {
  origins?: string[]
  next?: ActionName
}

export interface RequestActionParameters {
  url: URL
  next?: ActionName
  result?: ParameterResultPath
  output?: ParameterOutputTransformation
  method?: 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT'
  headers?: Record<string, string>
  query?: Record<string, string>
  options?: {
    cache?: number
  }
}

export interface ReturnActionParameters {
  next?: ActionName
}

export interface SearchActionParameters {
  next?: ActionName
  result?: ParameterResultPath
  collection: UUID
  query: string
  limit?: number
}

export interface StoreActionParameters {
  next?: ActionName
  result?: ParameterResultPath
  collection: UUID
  data: string | ItemData
}

export interface ScriptActionParameters {
  code: string
  next?: ActionName
  result?: ParameterResultPath
  output?: ParameterOutputTransformation
}

export interface SplitActionParameters {
  actions: ActionName[]
}

export interface StartActionParameters {
  triggers?: {
    event?: Partial<Record<PublicEvent, unknown>>
    schedule?: StartActionScheduleTriggerParameters
    webhook?: StartActionWebhookTriggerParameters
  }
  next?: ActionName
}

export interface StartActionScheduleTriggerParameters {
  expression: string
}

export interface StartActionWebhookTriggerParameters {
  activity?: boolean // FIXME - move activity to standalone action
  active: boolean
}

export interface TemplateActionParameters {
  template: string
  next?: ActionName
  result?: ParameterResultPath
  output?: ParameterOutputTransformation
}

export interface TokenActionParameters {
  keys: string[]
  next?: ActionName
}

export interface TransformActionParameters {
  next?: ActionName
  result?: ParameterResultPath
  input?: any
  output?: ParameterOutputTransformation
}

export interface ViewActionParameters {
  view: UUID
  next?: ActionName
}

export interface WaitActionParameters {
  delay: number
  next?: ActionName
}

export interface Action {
  type: `${ActionType}`
  description?: string
  parameters: any
}
