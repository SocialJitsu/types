// // import { PublicEvent } from './events.js'
// // import { ItemData } from './item.js'
// // import { ModuleOptions } from './module.js'
// // import { ActionResponseResult } from './response.js'
// // import {
//   Email,
//   URL,
//   JSONQuery,
//   UUID,
//   HTTPHeaders,
//   StringMap,
//   Data
// } from './shared.js'

import { Meta, ModuleScope } from '../graphql/index.js'

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
// // import { Interval, ISO8601DateTime, JSONQuery, UUID } from './shared.js'

export enum CollectionMappingFieldType {
  KEYWORD = 'keyword',
  TEXT = 'text',
  BOOLEAN = 'boolean',
  FLOAT = 'float',
  INTEGER = 'integer'
}

export type CollectionModel = {
  id: UUID
  serviceId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label?: string
  summary?: string
  options: CollectionOptions
  mapping?: CollectionMapping
  projection?: CollectionProjection
  triggers?: CollectionTriggers
  queries?: CollectionQueries
}

export type CollectionStackModel = {
  label?: string
  summary?: string
  options?: CollectionOptions
  mapping?: CollectionMapping
  projection?: CollectionProjection
  triggers?: CollectionTriggers
  queries?: CollectionQueries
}
export type CollectionQuery = {
  query: JSONQuery
  description?: string
}

export interface CollectionQueries {
  [key: string]: CollectionQuery
}
export interface CollectionTriggers {
  [key: string]: CollectionTrigger
}

export interface CollectionTrigger {
  query: JSONQuery
  ttl?: number // How long before we allow repeat firing - seconds
  range?: Interval // "34 days", "2 h" - none means stream data (i.e. now)
}

export interface CollectionProjection {
  list?: Projection
  detail?: Projection
}

export type Projection = Array<ProjectionField>

export type ProjectionField = ProjectionFieldText | ProjectionFieldList

export enum ProjectionFieldType {
  TEXT = 'text',
  LIST = 'list'
}

export interface ProjectionFieldText extends ProjectionFieldCommon {
  type: `${ProjectionFieldType.TEXT}`
}

export interface ProjectionFieldList extends ProjectionFieldCommon {
  type: `${ProjectionFieldType.LIST}`
}

export interface ProjectionFieldCommon {
  path: string
  label: string
}

export interface CollectionOptions {
  strict?: boolean // What happens to extra data not specified in mapping? strict = strip - default
  // errors?: 'reject' | 'ignore' not in effect yet TODO
}

export type CollectionMappingParams =
  | CollectionMappingFieldParams
  | [CollectionMappingFieldParams]
  | [CollectionMapping]
  | CollectionMapping

export interface CollectionMapping {
  [key: string]: CollectionMappingParams
}

export type CollectionMappingFieldParams =
  | CollectionMappingFieldKeywordParams
  | CollectionMappingFieldTextParams
  | CollectionMappingFieldBooleanParams
  | CollectionMappingFieldFloatParams
  | CollectionMappingFieldIntegerParams

export type CollectionMappingFieldKeywordParams =
  CollectionMappingFieldBaseParams<CollectionMappingFieldType.KEYWORD>

export type CollectionMappingFieldTextParams =
  CollectionMappingFieldBaseParams<CollectionMappingFieldType.TEXT>

export type CollectionMappingFieldIntegerParams =
  CollectionMappingFieldBaseParams<CollectionMappingFieldType.INTEGER>

export type CollectionMappingFieldFloatParams =
  CollectionMappingFieldBaseParams<CollectionMappingFieldType.FLOAT>

export type CollectionMappingFieldBooleanParams =
  CollectionMappingFieldBaseParams<CollectionMappingFieldType.BOOLEAN>

export interface CollectionMappingFieldBaseParams<
  TType extends CollectionMappingFieldType
> {
  enum?: CollectionMappingFieldTypes[TType][]
  type: `${TType}`
  default?: CollectionMappingFieldTypes[TType]
  required?: CollectionMappingFieldRequired
}

export type CollectionMappingFieldTypes = {
  keyword: string
  text: string
  boolean: boolean
  float: number
  integer: number
}

export type CollectionMappingFieldRequired = boolean

export type CollectionStackInput = {
  label?: string
  summary?: string
  options?: string
  mapping?: string
  projection?: string
  triggers?: string
  queries?: string
}
// import { Data, HTTPHeaders, StringMap, UUID } from './shared.js'

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
export enum LotusPublicEvent {
  COLLECTION_INSERT = 'collection_insert',
  COLLECTION_MODIFY = 'collection_modify',
  COLLECTION_REMOVE = 'collection_remove',
  INSIGHT_TRIGGER = 'insight_trigger',
  ITEM_INSERT = 'item_insert',
  ITEM_MODIFY = 'item_modify',
  ITEM_REMOVE = 'item_remove',
  MODULE_DEPLOY = 'module_deploy',
  PARAMETER_INSERT = 'parameter_insert',
  PARAMETER_MODIFY = 'parameter_modify',
  PARAMETER_REMOVE = 'parameter_remove',
  SCHEDULE = 'schedule',
  SERVICE_INSERT = 'service_insert',
  SERVICE_MODIFY = 'service_modify',
  SERVICE_REMOVE = 'service_remove',
  STACK_DEPLOYED = 'stack_deployed',
  USER_EVENT = 'user_event',
  VIEW_INSERT = 'view_insert',
  VIEW_MODIFY = 'view_modify',
  VIEW_REMOVE = 'view_remove',
  WORKFLOW_COMPLETE = 'workflow_complete',
  WORKFLOW_FAIL = 'workflow_fail',
  WORKFLOW_INSERT = 'workflow_insert',
  WORKFLOW_MODIFY = 'workflow_modify',
  WORKFLOW_REMOVE = 'workflow_remove',
  WORKFLOW_TRIGGER = 'workflow_trigger'
}

export type PublicEvent = Extract<
  LotusPublicEvent,
  | LotusPublicEvent.COLLECTION_INSERT
  | LotusPublicEvent.COLLECTION_MODIFY
  | LotusPublicEvent.COLLECTION_REMOVE
  | LotusPublicEvent.INSIGHT_TRIGGER
  | LotusPublicEvent.ITEM_INSERT
  | LotusPublicEvent.ITEM_MODIFY
  | LotusPublicEvent.ITEM_REMOVE
  | LotusPublicEvent.MODULE_DEPLOY
  | LotusPublicEvent.PARAMETER_INSERT
  | LotusPublicEvent.PARAMETER_MODIFY
  | LotusPublicEvent.PARAMETER_REMOVE
  | LotusPublicEvent.SCHEDULE
  | LotusPublicEvent.SERVICE_INSERT
  | LotusPublicEvent.SERVICE_MODIFY
  | LotusPublicEvent.SERVICE_REMOVE
  | LotusPublicEvent.STACK_DEPLOYED
  | LotusPublicEvent.USER_EVENT
  | LotusPublicEvent.VIEW_INSERT
  | LotusPublicEvent.VIEW_MODIFY
  | LotusPublicEvent.VIEW_REMOVE
  | LotusPublicEvent.WORKFLOW_COMPLETE
  | LotusPublicEvent.WORKFLOW_FAIL
  | LotusPublicEvent.WORKFLOW_INSERT
  | LotusPublicEvent.WORKFLOW_MODIFY
  | LotusPublicEvent.WORKFLOW_REMOVE
  | LotusPublicEvent.WORKFLOW_TRIGGER
>
// Form group sub elements

export type DynamicForm = Array<FormField>

export type FormField = FormFieldUnit | FormFieldMultiple

export enum FormFieldType {
  TEXT = 'text',
  SELECT = 'select'
}

export enum FormElementType {
  MULTIPLE = 'group',
  UNIT = 'unit'
}

export interface FormElementCommon {
  required?: boolean
  validation?: string
  name: string
  label: string
  help?: string
  defaultValue?: string
}

export interface FormTextElement extends FormElementCommon {
  type: `${FormFieldType.TEXT}`
  placeholder?: string
}

export interface FormSelectElement extends FormElementCommon {
  type: `${FormFieldType.SELECT}`
  options: string[]
}

export type FormElement = FormTextElement | FormSelectElement

// Form fields (single and multiple)
export type FormFieldUnit = {
  type: `${FormElementType.UNIT}`
  element: FormTextElement | FormSelectElement
}

export type FormFieldMultiple = {
  type: `${FormElementType.MULTIPLE}`
  title: string
  help?: string
  group: string
  elements: FormElement[]
}
// import { ISO8601DateTime, ObjectLiteral, UUID } from './shared.js'

export type ItemData = ObjectLiteral | null

export type ItemModel = {
  id: UUID
  collectionId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  data: ItemData
}
// import { ActionType } from './action.js'
// import { ActionContext } from './context.js'

// import { ActionResponseResult, ActionResponseStatus } from './response.js'
// import { ISO8601DateTime, UUID } from './shared.js'

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
// import { ActionResponseResult, ActionResponseStatus } from './response.js'
// import { ISO8601DateTime, Meta, UUID } from './shared.js'

export type ModuleOptions = {
  [x: string]:
    | string
    | number
    | undefined
    | boolean
    | Date
    | ModuleOptions
    | JsonArray
}

export type JsonArray = (
  | string
  | number
  | boolean
  | ModuleOptions
  | JsonArray
)[]

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
//   PRIVATE = 'private',
//   SECRET = 'secret',
//   PUBLIC = 'public'
// }

export type ModuleBaseModel = {
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
// import { ISO8601DateTime, UUID } from './shared.js'

export type ParameterModel = {
  id: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  key: string
  value: string
  summary?: string
}
export enum ActionResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error'
}
export type ActionResponseResult = unknown
// import { DynamicForm } from './form.js'
// import { ISO8601DateTime, ObjectHash, UUID } from './shared.js'

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
export type UUID = string
export type Email = string
export type ISO8601Date = string
export type ISO8601DateTime = string
export type ISO8601Time = string
export type URL = string
export type JSONQuery = string
export type ObjectHash = string

interface Dict<T> {
  [key: string]: T | undefined
}

// Range data alias (2 m, 4 hours, etc)
export type Interval = string

export type ObjectLiteral = Record<string, unknown>

export type HTTPHeaders = Dict<string | string[]>

export interface StringMap {
  [name: string]: string
}
// For API responses and general JSONish structure data (objects, arrays, etc)
export type Data = ObjectLiteral | ObjectLiteral[] | string[]

export type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json }

export type ComponentType =
  | 'Stack'
  | 'Service'
  | 'Module'
  | 'Parameter'
  | 'Workflow'
  | 'Collection'
  | 'View'
  | 'Item'

// export interface Meta {
//   author?: string
//   url?: string
// }
// import { CollectionStackInput, CollectionStackModel } from './collection.js'
// import { ServiceStackInput, ServiceStackModel } from './service.js'
// import { ViewStackInput, ViewStackModel } from './view.js'
// import { WorkflowStackInput, WorkflowStackModel } from './workflow.js'

export type StackGenerateParams = {
  projectPath: string
  outputDirectory: string
}

export interface StackDeployOptions {
  app: string
  force?: boolean
}

export type StackElementIdentifier = string // These get turned into UUID internally

export type StackModel = {
  service: {
    id: StackElementIdentifier
    data: ServiceStackModel
  }
  workflows: {
    id: StackElementIdentifier
    data: WorkflowStackModel
  }[]
  collections: {
    id: StackElementIdentifier
    data: CollectionStackModel
  }[]
  views: {
    id: StackElementIdentifier
    data: ViewStackModel
  }[]
}

export type StackData = {
  service: {
    id: StackElementIdentifier
    data: ServiceStackInput
  }
  workflows: {
    id: StackElementIdentifier
    data: WorkflowStackInput
  }[]
  collections: {
    id: StackElementIdentifier
    data: CollectionStackInput
  }[]
  views: {
    id: StackElementIdentifier
    data: ViewStackInput
  }[]
}
// import { UUID, ISO8601DateTime } from './shared.js'

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
// import { Action } from './action.js'
// import { ISO8601DateTime, UUID } from './shared.js'

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
