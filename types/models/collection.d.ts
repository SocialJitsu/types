import { Interval, ISO8601DateTime, JSONQuery, UUID } from './shared.js'

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
