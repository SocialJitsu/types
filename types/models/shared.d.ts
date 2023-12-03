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

export type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

export type ComponentType = 'Stack' | 'Service' | 'Module' | 'Parameter' | 'Workflow' | 'Collection' | 'View' | 'Item'

// export interface Meta {
//   author?: string
//   url?: string
// }
