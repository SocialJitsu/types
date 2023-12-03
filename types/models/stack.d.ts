import { CollectionStackInput, CollectionStackModel } from './collection.js'
import { ServiceStackInput, ServiceStackModel } from './service.js'
import { ViewStackInput, ViewStackModel } from './view.js'
import { WorkflowStackInput, WorkflowStackModel } from './workflow.js'

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
