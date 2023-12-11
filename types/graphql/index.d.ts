import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
  BigInt: any;
  Double: any;
};

export enum AccessType {
  Admin = 'admin',
  None = 'none',
  Operator = 'operator',
  Owner = 'owner'
}

export type Account = Node & {
  __typename?: 'Account';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UserAccess>>>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  usage?: Maybe<AccountUsage>;
};


export type AccountUsageArgs = {
  endDate?: InputMaybe<Scalars['AWSDate']>;
  startDate?: InputMaybe<Scalars['AWSDate']>;
};

export type AccountUsage = {
  __typename?: 'AccountUsage';
  request: Scalars['Int'];
  runtime: Scalars['Int'];
  storage: Scalars['Int'];
};

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  service: Service;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type AssetConnection = {
  __typename?: 'AssetConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Asset>>>;
};

export type BatchCreateItem = {
  collectionId: Scalars['ID'];
  data: Scalars['AWSJSON'];
};

export type BatchCreateItemsInput = {
  items: Array<InputMaybe<BatchCreateItem>>;
};

export type BatchCreateItemsPayload = {
  __typename?: 'BatchCreateItemsPayload';
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type BatchDeleteItemsInput = {
  items: Array<InputMaybe<Scalars['ID']>>;
};

export type BatchDeleteItemsPayload = {
  __typename?: 'BatchDeleteItemsPayload';
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type Collection = {
  __typename?: 'Collection';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  insight?: Maybe<CollectionInsight>;
  label?: Maybe<Scalars['String']>;
  mapping?: Maybe<Scalars['AWSJSON']>;
  options?: Maybe<Scalars['AWSJSON']>;
  projection?: Maybe<Scalars['AWSJSON']>;
  queries?: Maybe<Scalars['AWSJSON']>;
  service: Service;
  summary?: Maybe<Scalars['String']>;
  triggers?: Maybe<Scalars['AWSJSON']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  usage?: Maybe<CollectionUsage>;
};


export type CollectionInsightArgs = {
  endDate?: InputMaybe<Scalars['AWSDateTime']>;
  interval: CollectionInsightInterval;
  query: Scalars['String'];
  startDate?: InputMaybe<Scalars['AWSDateTime']>;
};


export type CollectionUsageArgs = {
  endDate?: InputMaybe<Scalars['AWSDate']>;
  startDate?: InputMaybe<Scalars['AWSDate']>;
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Collection>>>;
};

export type CollectionInsight = {
  __typename?: 'CollectionInsight';
  count: Scalars['Int'];
  value: Scalars['Float'];
};

export enum CollectionInsightInterval {
  Day = 'day',
  Hour = 'hour',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type CollectionUsage = {
  __typename?: 'CollectionUsage';
  storage?: Maybe<Scalars['Int']>;
};

export type CreateAssetInput = {
  label?: InputMaybe<Scalars['String']>;
  reference: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type CreateAssetPayload = {
  __typename?: 'CreateAssetPayload';
  id: Scalars['ID'];
};

export type CreateCollectionInput = {
  label?: InputMaybe<Scalars['String']>;
  mapping?: InputMaybe<Scalars['AWSJSON']>;
  options?: InputMaybe<Scalars['AWSJSON']>;
  projection?: InputMaybe<Scalars['AWSJSON']>;
  queries?: InputMaybe<Scalars['AWSJSON']>;
  serviceId: Scalars['ID'];
  summary?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Scalars['AWSJSON']>;
};

export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  id: Scalars['ID'];
};

export type CreateItemInput = {
  collectionId: Scalars['ID'];
  data?: InputMaybe<Scalars['AWSJSON']>;
};

export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  id: Scalars['ID'];
};

export type CreateModuleInput = {
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Scalars['AWSJSON']>;
  label?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<MetaInput>;
  options?: InputMaybe<Scalars['AWSJSON']>;
  reference?: InputMaybe<Scalars['String']>;
  repository?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<ModuleScope>;
  source?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type CreateModulePayload = {
  __typename?: 'CreateModulePayload';
  id: Scalars['ID'];
};

export type CreatePackageFromServiceInput = {
  serviceId: Scalars['ID'];
};

export type CreatePackageInput = {
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<MetaInput>;
  scope?: InputMaybe<PackageScope>;
  stack?: InputMaybe<Scalars['AWSJSON']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type CreatePackagePayload = {
  __typename?: 'CreatePackagePayload';
  id: Scalars['ID'];
};

export type CreateParameterInput = {
  key: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type CreateParameterPayload = {
  __typename?: 'CreateParameterPayload';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type CreateServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Scalars['AWSJSON']>;
  settings?: InputMaybe<Scalars['AWSJSON']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type CreateServicePayload = {
  __typename?: 'CreateServicePayload';
  id: Scalars['ID'];
};

export type CreateSignedPostPayload = {
  __typename?: 'CreateSignedPostPayload';
  endpoint: Scalars['AWSURL'];
  expiry: Scalars['Int'];
  key: Scalars['String'];
  policy: Scalars['String'];
};

export type CreateViewInput = {
  content?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  summary?: InputMaybe<Scalars['String']>;
};

export type CreateViewPayload = {
  __typename?: 'CreateViewPayload';
  id: Scalars['ID'];
};

export type CreateWorkflowInput = {
  definition?: InputMaybe<Scalars['AWSJSON']>;
  label?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  summary?: InputMaybe<Scalars['String']>;
};

export type CreateWorkflowPayload = {
  __typename?: 'CreateWorkflowPayload';
  id: Scalars['ID'];
};

export type DateRangeFilterInput = {
  end: Scalars['AWSDate'];
  start: Scalars['AWSDate'];
};

export type DateTimeRangeFilterInput = {
  end?: InputMaybe<Scalars['AWSDateTime']>;
  start?: InputMaybe<Scalars['AWSDateTime']>;
};

export type DeleteAssetInput = {
  id: Scalars['ID'];
};

export type DeleteAssetPayload = {
  __typename?: 'DeleteAssetPayload';
  id?: Maybe<Scalars['ID']>;
};

export type DeleteCollectionInput = {
  id: Scalars['ID'];
};

export type DeleteCollectionPayload = {
  __typename?: 'DeleteCollectionPayload';
  id: Scalars['ID'];
};

export type DeleteItemInput = {
  id: Scalars['ID'];
};

export type DeleteItemPayload = {
  __typename?: 'DeleteItemPayload';
  id?: Maybe<Scalars['ID']>;
};

export type DeleteModuleInput = {
  id: Scalars['ID'];
};

export type DeleteModulePayload = {
  __typename?: 'DeleteModulePayload';
  id?: Maybe<Scalars['ID']>;
};

export type DeletePackageInput = {
  id: Scalars['ID'];
};

export type DeletePackagePayload = {
  __typename?: 'DeletePackagePayload';
  id?: Maybe<Scalars['ID']>;
};

export type DeleteParameterInput = {
  id: Scalars['ID'];
};

export type DeleteParameterPayload = {
  __typename?: 'DeleteParameterPayload';
  id: Scalars['ID'];
};

export type DeleteServiceInput = {
  id: Scalars['ID'];
};

export type DeleteServicePayload = {
  __typename?: 'DeleteServicePayload';
  id?: Maybe<Scalars['ID']>;
};

export type DeleteViewInput = {
  id: Scalars['ID'];
};

export type DeleteViewPayload = {
  __typename?: 'DeleteViewPayload';
  id: Scalars['ID'];
};

export type DeleteWorkflowInput = {
  id: Scalars['ID'];
};

export type DeleteWorkflowPayload = {
  __typename?: 'DeleteWorkflowPayload';
  id?: Maybe<Scalars['ID']>;
};

export type DeployStackInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  stack: Stack;
};

export type DeployStackPayload = {
  __typename?: 'DeployStackPayload';
  id: Scalars['ID'];
};

export type DestroyStackInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DestroyStackPayload = {
  __typename?: 'DestroyStackPayload';
  id: Scalars['ID'];
};

export type Element = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  data?: Maybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type FloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
};

export type IdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
};

export type InvokeModuleInput = {
  id: Scalars['ID'];
  parameters?: InputMaybe<Scalars['AWSJSON']>;
  payload?: InputMaybe<Scalars['AWSJSON']>;
};

export type InvokeModulePayload = {
  __typename?: 'InvokeModulePayload';
  id?: Maybe<Scalars['ID']>;
  response?: Maybe<Scalars['AWSJSON']>;
};

export type Item = Element & {
  __typename?: 'Item';
  collection: Collection;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  data?: Maybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Item>>>;
};

export type ItemFilter = {
  endDate?: InputMaybe<Scalars['AWSDateTime']>;
  startDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type Log = {
  __typename?: 'Log';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  processId: Scalars['ID'];
  result?: Maybe<Scalars['AWSJSON']>;
  status?: Maybe<LogStatus>;
  triggeredAt?: Maybe<Scalars['AWSDateTime']>;
  type?: Maybe<Scalars['String']>;
  workflowId: Scalars['ID'];
};

export type LogConnection = {
  __typename?: 'LogConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Log>>>;
};

export type LogFilter = {
  endDate?: InputMaybe<Scalars['AWSDateTime']>;
  processId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['AWSDateTime']>;
  status?: InputMaybe<LogStatus>;
  workflowId?: InputMaybe<Scalars['ID']>;
};

export enum LogStatus {
  Error = 'error',
  Success = 'success'
}

export type Meta = {
  __typename?: 'Meta';
  author?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MetaInput = {
  author?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Module = Node & {
  __typename?: 'Module';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  options?: Maybe<Scalars['AWSJSON']>;
  reference?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  scope?: Maybe<ModuleScope>;
  source?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type ModuleConnection = {
  __typename?: 'ModuleConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Module>>>;
};

export enum ModuleScope {
  Private = 'private',
  Public = 'public',
  Secret = 'secret'
}

export type Mutation = {
  __typename?: 'Mutation';
  batchCreateItems: BatchCreateItemsPayload;
  batchDeleteItems: BatchDeleteItemsPayload;
  createAsset: CreateAssetPayload;
  createCollection: CreateCollectionPayload;
  createItem: CreateItemPayload;
  createModule: CreateModulePayload;
  createParameter: CreateParameterPayload;
  createService: CreateServicePayload;
  createSignedPost: CreateSignedPostPayload;
  createView: CreateViewPayload;
  createWorkflow?: Maybe<CreateWorkflowPayload>;
  deleteAsset: DeleteAssetPayload;
  deleteCollection: DeleteCollectionPayload;
  deleteItem: DeleteItemPayload;
  deleteModule: DeleteModulePayload;
  deleteParameter: DeleteParameterPayload;
  deleteService: DeleteServicePayload;
  deleteView: DeleteViewPayload;
  deleteWorkflow?: Maybe<DeleteWorkflowPayload>;
  deployStack: DeployStackPayload;
  destroyStack: DestroyStackPayload;
  invokeModule: InvokeModulePayload;
  setAccountAccess: SetAccountAccessPayload;
  triggerWorkflow?: Maybe<TriggerWorkflowPayload>;
  updateAsset: UpdateAssetPayload;
  updateCollection: UpdateCollectionPayload;
  updateItem: UpdateItemPayload;
  updateModule: UpdateModulePayload;
  updateParameter: UpdateParameterPayload;
  updateService: UpdateServicePayload;
  updateView: UpdateViewPayload;
  updateWorkflow?: Maybe<UpdateWorkflowPayload>;
  validateCollection: ValidateCollectionPayload;
  validateParameter: ValidateParameterPayload;
  validateService: ValidateServicePayload;
  validateView: ValidateViewPayload;
  validateWorkflow: ValidateWorkflowPayload;
};


export type MutationBatchCreateItemsArgs = {
  input?: InputMaybe<BatchCreateItemsInput>;
};


export type MutationBatchDeleteItemsArgs = {
  input?: InputMaybe<BatchDeleteItemsInput>;
};


export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateModuleArgs = {
  input: CreateModuleInput;
};


export type MutationCreateParameterArgs = {
  input: CreateParameterInput;
};


export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationCreateViewArgs = {
  input: CreateViewInput;
};


export type MutationCreateWorkflowArgs = {
  input: CreateWorkflowInput;
};


export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationDeleteCollectionArgs = {
  input: DeleteCollectionInput;
};


export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};


export type MutationDeleteModuleArgs = {
  input: DeleteModuleInput;
};


export type MutationDeleteParameterArgs = {
  input: DeleteParameterInput;
};


export type MutationDeleteServiceArgs = {
  input: DeleteServiceInput;
};


export type MutationDeleteViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteWorkflowArgs = {
  input: DeleteWorkflowInput;
};


export type MutationDeployStackArgs = {
  input: DeployStackInput;
};


export type MutationDestroyStackArgs = {
  input: DestroyStackInput;
};


export type MutationInvokeModuleArgs = {
  input: InvokeModuleInput;
};


export type MutationSetAccountAccessArgs = {
  input: SetAccountAccessInput;
};


export type MutationTriggerWorkflowArgs = {
  input: TriggerWorkflowInput;
};


export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateModuleArgs = {
  input: UpdateModuleInput;
};


export type MutationUpdateParameterArgs = {
  input: UpdateParameterInput;
};


export type MutationUpdateServiceArgs = {
  input: UpdateServiceInput;
};


export type MutationUpdateViewArgs = {
  input: UpdateViewInput;
};


export type MutationUpdateWorkflowArgs = {
  input: UpdateWorkflowInput;
};


export type MutationValidateCollectionArgs = {
  input: ValidateCollectionInput;
};


export type MutationValidateParameterArgs = {
  input: ValidateParameterInput;
};


export type MutationValidateServiceArgs = {
  input: ValidateServiceInput;
};


export type MutationValidateViewArgs = {
  input: ValidateViewInput;
};


export type MutationValidateWorkflowArgs = {
  input: ValidateWorkflowInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type Package = Node & {
  __typename?: 'Package';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  scope?: Maybe<PackageScope>;
  stack?: Maybe<Scalars['AWSJSON']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type PackageConnection = {
  __typename?: 'PackageConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Package>>>;
};

export enum PackageScope {
  Public = 'public',
  Secret = 'secret'
}

export type Parameter = Node & {
  __typename?: 'Parameter';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type ParameterConnection = {
  __typename?: 'ParameterConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Parameter>>>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  asset: Asset;
  assets: AssetConnection;
  collection: Collection;
  collections: CollectionConnection;
  item: Item;
  items?: Maybe<ItemConnection>;
  logs: LogConnection;
  memberships?: Maybe<UserAccountsConnection>;
  module: Module;
  modules?: Maybe<ModuleConnection>;
  node?: Maybe<Node>;
  parameter: Parameter;
  parameters?: Maybe<ParameterConnection>;
  service: Service;
  services: ServiceConnection;
  view: View;
  views: ViewConnection;
  workflow: Workflow;
  workflows: WorkflowConnection;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  serviceId?: InputMaybe<Scalars['ID']>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemsArgs = {
  collectionId: Scalars['ID'];
  filter?: InputMaybe<ItemFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryLogsArgs = {
  filter?: InputMaybe<LogFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
};


export type QueryModuleArgs = {
  id: Scalars['ID'];
};


export type QueryModulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryParameterArgs = {
  id: Scalars['ID'];
};


export type QueryParametersArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
};


export type QueryServicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryViewArgs = {
  id: Scalars['ID'];
};


export type QueryViewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  serviceId?: InputMaybe<Scalars['ID']>;
};


export type QueryWorkflowArgs = {
  id: Scalars['ID'];
};


export type QueryWorkflowsArgs = {
  after?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  serviceId?: InputMaybe<Scalars['ID']>;
};

export type Service = Node & {
  __typename?: 'Service';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['AWSJSON']>;
  settings?: Maybe<Scalars['AWSJSON']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Service>>>;
};

export type SetAccountAccessInput = {
  id?: InputMaybe<Scalars['ID']>;
  permission?: InputMaybe<AccessType>;
  userId: Scalars['ID'];
};

export type SetAccountAccessPayload = {
  __typename?: 'SetAccountAccessPayload';
  id: Scalars['ID'];
};

export type Stack = {
  collections?: InputMaybe<Array<InputMaybe<StackCollection>>>;
  service: StackService;
  views?: InputMaybe<Array<InputMaybe<StackView>>>;
  workflows?: InputMaybe<Array<InputMaybe<StackWorkflow>>>;
};

export type StackCollection = {
  data?: InputMaybe<CreateCollectionInput>;
  id: Scalars['ID'];
};

export type StackService = {
  data?: InputMaybe<CreateServiceInput>;
  id: Scalars['ID'];
};

export type StackView = {
  data?: InputMaybe<CreateViewInput>;
  id: Scalars['ID'];
};

export type StackWorkflow = {
  data?: InputMaybe<CreateWorkflowInput>;
  id: Scalars['ID'];
};

export type StringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
};

export enum TriggerMethod {
  Api = 'api',
  Event = 'event',
  Schedule = 'schedule',
  Webhook = 'webhook'
}

export type TriggerWorkflowInput = {
  id: Scalars['ID'];
  payload?: InputMaybe<Scalars['String']>;
};

export type TriggerWorkflowPayload = {
  __typename?: 'TriggerWorkflowPayload';
  errors?: Maybe<Array<Maybe<WorkflowError>>>;
  result?: Maybe<Scalars['AWSJSON']>;
  status?: Maybe<WorkflowStatus>;
};

export type UpdateAssetInput = {
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
};

export type UpdateAssetPayload = {
  __typename?: 'UpdateAssetPayload';
  id?: Maybe<Scalars['ID']>;
};

export type UpdateCollectionInput = {
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  mapping?: InputMaybe<Scalars['AWSJSON']>;
  options?: InputMaybe<Scalars['AWSJSON']>;
  projection?: InputMaybe<Scalars['AWSJSON']>;
  queries?: InputMaybe<Scalars['AWSJSON']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  summary?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Scalars['AWSJSON']>;
};

export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  id: Scalars['ID'];
};

export type UpdateItemInput = {
  collectionId?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
};

export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  id?: Maybe<Scalars['ID']>;
};

export type UpdateModuleInput = {
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<MetaInput>;
  options?: InputMaybe<Scalars['AWSJSON']>;
  reference?: InputMaybe<Scalars['String']>;
  repository?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<ModuleScope>;
  source?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type UpdateModulePayload = {
  __typename?: 'UpdateModulePayload';
  id?: Maybe<Scalars['ID']>;
};

export type UpdatePackageInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<MetaInput>;
  scope?: InputMaybe<PackageScope>;
  stack?: InputMaybe<Scalars['AWSJSON']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type UpdatePackagePayload = {
  __typename?: 'UpdatePackagePayload';
  id?: Maybe<Scalars['ID']>;
};

export type UpdateParameterInput = {
  id: Scalars['ID'];
  key?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateParameterPayload = {
  __typename?: 'UpdateParameterPayload';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type UpdateServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Scalars['AWSJSON']>;
  settings?: InputMaybe<Scalars['AWSJSON']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type UpdateServicePayload = {
  __typename?: 'UpdateServicePayload';
  id?: Maybe<Scalars['ID']>;
};

export type UpdateViewInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type UpdateViewPayload = {
  __typename?: 'UpdateViewPayload';
  id: Scalars['ID'];
};

export type UpdateWorkflowInput = {
  definition?: InputMaybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkflowPayload = {
  __typename?: 'UpdateWorkflowPayload';
  id: Scalars['ID'];
};

export type UserAccess = {
  __typename?: 'UserAccess';
  permission?: Maybe<AccessType>;
  userId: Scalars['ID'];
};

export type UserAccounts = Node & {
  __typename?: 'UserAccounts';
  id: Scalars['ID'];
  permission: Scalars['String'];
};

export type UserAccountsConnection = {
  __typename?: 'UserAccountsConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<UserAccounts>>>;
};

export type ValidateCollectionInput = {
  label?: InputMaybe<Scalars['String']>;
  mapping?: InputMaybe<Scalars['AWSJSON']>;
  options?: InputMaybe<Scalars['AWSJSON']>;
  projection?: InputMaybe<Scalars['AWSJSON']>;
  queries?: InputMaybe<Scalars['AWSJSON']>;
  serviceId: Scalars['ID'];
  summary?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Scalars['AWSJSON']>;
};

export type ValidateCollectionPayload = {
  __typename?: 'ValidateCollectionPayload';
  label?: Maybe<Scalars['String']>;
  mapping?: Maybe<Scalars['AWSJSON']>;
  options?: Maybe<Scalars['AWSJSON']>;
  projection?: Maybe<Scalars['AWSJSON']>;
  queries?: Maybe<Scalars['AWSJSON']>;
  serviceId: Scalars['ID'];
  summary?: Maybe<Scalars['String']>;
  triggers?: Maybe<Scalars['AWSJSON']>;
};

export type ValidatePackageInput = {
  data?: InputMaybe<Scalars['AWSJSON']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  repository?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<PackageScope>;
  source?: InputMaybe<Scalars['String']>;
};

export type ValidatePackagePayload = {
  __typename?: 'ValidatePackagePayload';
  data?: Maybe<Scalars['AWSJSON']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  scope?: Maybe<PackageScope>;
  source?: Maybe<Scalars['String']>;
};

export type ValidateParameterInput = {
  key: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type ValidateParameterPayload = {
  __typename?: 'ValidateParameterPayload';
  key: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type ValidateServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Scalars['AWSJSON']>;
  settings?: InputMaybe<Scalars['AWSJSON']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type ValidateServicePayload = {
  __typename?: 'ValidateServicePayload';
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['AWSJSON']>;
  settings?: Maybe<Scalars['AWSJSON']>;
  summary?: Maybe<Scalars['String']>;
};

export type ValidateViewInput = {
  content?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  summary?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ValidateViewPayload = {
  __typename?: 'ValidateViewPayload';
  content?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
  summary?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ValidateWorkflowInput = {
  definition?: InputMaybe<Scalars['AWSJSON']>;
  label?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  summary?: InputMaybe<Scalars['String']>;
};

export type ValidateWorkflowPayload = {
  __typename?: 'ValidateWorkflowPayload';
  definition?: Maybe<Scalars['AWSJSON']>;
  label?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
  summary?: Maybe<Scalars['String']>;
};

export type View = {
  __typename?: 'View';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  service: Service;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  usage?: Maybe<ViewUsage>;
};


export type ViewUsageArgs = {
  endDate?: InputMaybe<Scalars['AWSDate']>;
  startDate?: InputMaybe<Scalars['AWSDate']>;
};

export type ViewConnection = {
  __typename?: 'ViewConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<View>>>;
};

export type ViewUsage = {
  __typename?: 'ViewUsage';
  request?: Maybe<Scalars['Int']>;
};

export type Workflow = Node & {
  __typename?: 'Workflow';
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  definition?: Maybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  service: Service;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  usage?: Maybe<WorkflowUsage>;
};


export type WorkflowUsageArgs = {
  endDate?: InputMaybe<Scalars['AWSDate']>;
  startDate?: InputMaybe<Scalars['AWSDate']>;
};

export type WorkflowConnection = {
  __typename?: 'WorkflowConnection';
  nextToken?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Workflow>>>;
};

export type WorkflowError = {
  __typename?: 'WorkflowError';
  code: Scalars['String'];
  data?: Maybe<Scalars['AWSJSON']>;
  message?: Maybe<Scalars['String']>;
};

export enum WorkflowStatus {
  Error = 'error',
  Success = 'success'
}

export type WorkflowUsage = {
  __typename?: 'WorkflowUsage';
  runtime?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AWSDate: ResolverTypeWrapper<Scalars['AWSDate']>;
  AWSDateTime: ResolverTypeWrapper<Scalars['AWSDateTime']>;
  AWSEmail: ResolverTypeWrapper<Scalars['AWSEmail']>;
  AWSIPAddress: ResolverTypeWrapper<Scalars['AWSIPAddress']>;
  AWSJSON: ResolverTypeWrapper<Scalars['AWSJSON']>;
  AWSPhone: ResolverTypeWrapper<Scalars['AWSPhone']>;
  AWSTime: ResolverTypeWrapper<Scalars['AWSTime']>;
  AWSTimestamp: ResolverTypeWrapper<Scalars['AWSTimestamp']>;
  AWSURL: ResolverTypeWrapper<Scalars['AWSURL']>;
  AccessType: AccessType;
  Account: ResolverTypeWrapper<Account>;
  AccountUsage: ResolverTypeWrapper<AccountUsage>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetConnection: ResolverTypeWrapper<AssetConnection>;
  BatchCreateItem: BatchCreateItem;
  BatchCreateItemsInput: BatchCreateItemsInput;
  BatchCreateItemsPayload: ResolverTypeWrapper<BatchCreateItemsPayload>;
  BatchDeleteItemsInput: BatchDeleteItemsInput;
  BatchDeleteItemsPayload: ResolverTypeWrapper<BatchDeleteItemsPayload>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilterInput: BooleanFilterInput;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  CollectionInsight: ResolverTypeWrapper<CollectionInsight>;
  CollectionInsightInterval: CollectionInsightInterval;
  CollectionUsage: ResolverTypeWrapper<CollectionUsage>;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: ResolverTypeWrapper<CreateAssetPayload>;
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: ResolverTypeWrapper<CreateCollectionPayload>;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: ResolverTypeWrapper<CreateItemPayload>;
  CreateModuleInput: CreateModuleInput;
  CreateModulePayload: ResolverTypeWrapper<CreateModulePayload>;
  CreatePackageFromServiceInput: CreatePackageFromServiceInput;
  CreatePackageInput: CreatePackageInput;
  CreatePackagePayload: ResolverTypeWrapper<CreatePackagePayload>;
  CreateParameterInput: CreateParameterInput;
  CreateParameterPayload: ResolverTypeWrapper<CreateParameterPayload>;
  CreateServiceInput: CreateServiceInput;
  CreateServicePayload: ResolverTypeWrapper<CreateServicePayload>;
  CreateSignedPostPayload: ResolverTypeWrapper<CreateSignedPostPayload>;
  CreateViewInput: CreateViewInput;
  CreateViewPayload: ResolverTypeWrapper<CreateViewPayload>;
  CreateWorkflowInput: CreateWorkflowInput;
  CreateWorkflowPayload: ResolverTypeWrapper<CreateWorkflowPayload>;
  DateRangeFilterInput: DateRangeFilterInput;
  DateTimeRangeFilterInput: DateTimeRangeFilterInput;
  DeleteAssetInput: DeleteAssetInput;
  DeleteAssetPayload: ResolverTypeWrapper<DeleteAssetPayload>;
  DeleteCollectionInput: DeleteCollectionInput;
  DeleteCollectionPayload: ResolverTypeWrapper<DeleteCollectionPayload>;
  DeleteItemInput: DeleteItemInput;
  DeleteItemPayload: ResolverTypeWrapper<DeleteItemPayload>;
  DeleteModuleInput: DeleteModuleInput;
  DeleteModulePayload: ResolverTypeWrapper<DeleteModulePayload>;
  DeletePackageInput: DeletePackageInput;
  DeletePackagePayload: ResolverTypeWrapper<DeletePackagePayload>;
  DeleteParameterInput: DeleteParameterInput;
  DeleteParameterPayload: ResolverTypeWrapper<DeleteParameterPayload>;
  DeleteServiceInput: DeleteServiceInput;
  DeleteServicePayload: ResolverTypeWrapper<DeleteServicePayload>;
  DeleteViewInput: DeleteViewInput;
  DeleteViewPayload: ResolverTypeWrapper<DeleteViewPayload>;
  DeleteWorkflowInput: DeleteWorkflowInput;
  DeleteWorkflowPayload: ResolverTypeWrapper<DeleteWorkflowPayload>;
  DeployStackInput: DeployStackInput;
  DeployStackPayload: ResolverTypeWrapper<DeployStackPayload>;
  DestroyStackInput: DestroyStackInput;
  DestroyStackPayload: ResolverTypeWrapper<DestroyStackPayload>;
  Double: ResolverTypeWrapper<Scalars['Double']>;
  Element: ResolversTypes['Item'];
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatFilterInput: FloatFilterInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilterInput: IntFilterInput;
  InvokeModuleInput: InvokeModuleInput;
  InvokeModulePayload: ResolverTypeWrapper<InvokeModulePayload>;
  Item: ResolverTypeWrapper<Item>;
  ItemConnection: ResolverTypeWrapper<ItemConnection>;
  ItemFilter: ItemFilter;
  Log: ResolverTypeWrapper<Log>;
  LogConnection: ResolverTypeWrapper<LogConnection>;
  LogFilter: LogFilter;
  LogStatus: LogStatus;
  Meta: ResolverTypeWrapper<Meta>;
  MetaInput: MetaInput;
  Module: ResolverTypeWrapper<Module>;
  ModuleConnection: ResolverTypeWrapper<ModuleConnection>;
  ModuleScope: ModuleScope;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Account'] | ResolversTypes['Asset'] | ResolversTypes['Module'] | ResolversTypes['Package'] | ResolversTypes['Parameter'] | ResolversTypes['Service'] | ResolversTypes['UserAccounts'] | ResolversTypes['Workflow'];
  Package: ResolverTypeWrapper<Package>;
  PackageConnection: ResolverTypeWrapper<PackageConnection>;
  PackageScope: PackageScope;
  Parameter: ResolverTypeWrapper<Parameter>;
  ParameterConnection: ResolverTypeWrapper<ParameterConnection>;
  Query: ResolverTypeWrapper<{}>;
  Service: ResolverTypeWrapper<Service>;
  ServiceConnection: ResolverTypeWrapper<ServiceConnection>;
  SetAccountAccessInput: SetAccountAccessInput;
  SetAccountAccessPayload: ResolverTypeWrapper<SetAccountAccessPayload>;
  Stack: Stack;
  StackCollection: StackCollection;
  StackService: StackService;
  StackView: StackView;
  StackWorkflow: StackWorkflow;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilterInput: StringFilterInput;
  Subscription: ResolverTypeWrapper<{}>;
  TriggerMethod: TriggerMethod;
  TriggerWorkflowInput: TriggerWorkflowInput;
  TriggerWorkflowPayload: ResolverTypeWrapper<TriggerWorkflowPayload>;
  UpdateAssetInput: UpdateAssetInput;
  UpdateAssetPayload: ResolverTypeWrapper<UpdateAssetPayload>;
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: ResolverTypeWrapper<UpdateCollectionPayload>;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: ResolverTypeWrapper<UpdateItemPayload>;
  UpdateModuleInput: UpdateModuleInput;
  UpdateModulePayload: ResolverTypeWrapper<UpdateModulePayload>;
  UpdatePackageInput: UpdatePackageInput;
  UpdatePackagePayload: ResolverTypeWrapper<UpdatePackagePayload>;
  UpdateParameterInput: UpdateParameterInput;
  UpdateParameterPayload: ResolverTypeWrapper<UpdateParameterPayload>;
  UpdateServiceInput: UpdateServiceInput;
  UpdateServicePayload: ResolverTypeWrapper<UpdateServicePayload>;
  UpdateViewInput: UpdateViewInput;
  UpdateViewPayload: ResolverTypeWrapper<UpdateViewPayload>;
  UpdateWorkflowInput: UpdateWorkflowInput;
  UpdateWorkflowPayload: ResolverTypeWrapper<UpdateWorkflowPayload>;
  UserAccess: ResolverTypeWrapper<UserAccess>;
  UserAccounts: ResolverTypeWrapper<UserAccounts>;
  UserAccountsConnection: ResolverTypeWrapper<UserAccountsConnection>;
  ValidateCollectionInput: ValidateCollectionInput;
  ValidateCollectionPayload: ResolverTypeWrapper<ValidateCollectionPayload>;
  ValidatePackageInput: ValidatePackageInput;
  ValidatePackagePayload: ResolverTypeWrapper<ValidatePackagePayload>;
  ValidateParameterInput: ValidateParameterInput;
  ValidateParameterPayload: ResolverTypeWrapper<ValidateParameterPayload>;
  ValidateServiceInput: ValidateServiceInput;
  ValidateServicePayload: ResolverTypeWrapper<ValidateServicePayload>;
  ValidateViewInput: ValidateViewInput;
  ValidateViewPayload: ResolverTypeWrapper<ValidateViewPayload>;
  ValidateWorkflowInput: ValidateWorkflowInput;
  ValidateWorkflowPayload: ResolverTypeWrapper<ValidateWorkflowPayload>;
  View: ResolverTypeWrapper<View>;
  ViewConnection: ResolverTypeWrapper<ViewConnection>;
  ViewUsage: ResolverTypeWrapper<ViewUsage>;
  Workflow: ResolverTypeWrapper<Workflow>;
  WorkflowConnection: ResolverTypeWrapper<WorkflowConnection>;
  WorkflowError: ResolverTypeWrapper<WorkflowError>;
  WorkflowStatus: WorkflowStatus;
  WorkflowUsage: ResolverTypeWrapper<WorkflowUsage>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AWSDate: Scalars['AWSDate'];
  AWSDateTime: Scalars['AWSDateTime'];
  AWSEmail: Scalars['AWSEmail'];
  AWSIPAddress: Scalars['AWSIPAddress'];
  AWSJSON: Scalars['AWSJSON'];
  AWSPhone: Scalars['AWSPhone'];
  AWSTime: Scalars['AWSTime'];
  AWSTimestamp: Scalars['AWSTimestamp'];
  AWSURL: Scalars['AWSURL'];
  Account: Account;
  AccountUsage: AccountUsage;
  Asset: Asset;
  AssetConnection: AssetConnection;
  BatchCreateItem: BatchCreateItem;
  BatchCreateItemsInput: BatchCreateItemsInput;
  BatchCreateItemsPayload: BatchCreateItemsPayload;
  BatchDeleteItemsInput: BatchDeleteItemsInput;
  BatchDeleteItemsPayload: BatchDeleteItemsPayload;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  BooleanFilterInput: BooleanFilterInput;
  Collection: Collection;
  CollectionConnection: CollectionConnection;
  CollectionInsight: CollectionInsight;
  CollectionUsage: CollectionUsage;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: CreateAssetPayload;
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: CreateCollectionPayload;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: CreateItemPayload;
  CreateModuleInput: CreateModuleInput;
  CreateModulePayload: CreateModulePayload;
  CreatePackageFromServiceInput: CreatePackageFromServiceInput;
  CreatePackageInput: CreatePackageInput;
  CreatePackagePayload: CreatePackagePayload;
  CreateParameterInput: CreateParameterInput;
  CreateParameterPayload: CreateParameterPayload;
  CreateServiceInput: CreateServiceInput;
  CreateServicePayload: CreateServicePayload;
  CreateSignedPostPayload: CreateSignedPostPayload;
  CreateViewInput: CreateViewInput;
  CreateViewPayload: CreateViewPayload;
  CreateWorkflowInput: CreateWorkflowInput;
  CreateWorkflowPayload: CreateWorkflowPayload;
  DateRangeFilterInput: DateRangeFilterInput;
  DateTimeRangeFilterInput: DateTimeRangeFilterInput;
  DeleteAssetInput: DeleteAssetInput;
  DeleteAssetPayload: DeleteAssetPayload;
  DeleteCollectionInput: DeleteCollectionInput;
  DeleteCollectionPayload: DeleteCollectionPayload;
  DeleteItemInput: DeleteItemInput;
  DeleteItemPayload: DeleteItemPayload;
  DeleteModuleInput: DeleteModuleInput;
  DeleteModulePayload: DeleteModulePayload;
  DeletePackageInput: DeletePackageInput;
  DeletePackagePayload: DeletePackagePayload;
  DeleteParameterInput: DeleteParameterInput;
  DeleteParameterPayload: DeleteParameterPayload;
  DeleteServiceInput: DeleteServiceInput;
  DeleteServicePayload: DeleteServicePayload;
  DeleteViewInput: DeleteViewInput;
  DeleteViewPayload: DeleteViewPayload;
  DeleteWorkflowInput: DeleteWorkflowInput;
  DeleteWorkflowPayload: DeleteWorkflowPayload;
  DeployStackInput: DeployStackInput;
  DeployStackPayload: DeployStackPayload;
  DestroyStackInput: DestroyStackInput;
  DestroyStackPayload: DestroyStackPayload;
  Double: Scalars['Double'];
  Element: ResolversParentTypes['Item'];
  Float: Scalars['Float'];
  FloatFilterInput: FloatFilterInput;
  ID: Scalars['ID'];
  IDFilterInput: IdFilterInput;
  Int: Scalars['Int'];
  IntFilterInput: IntFilterInput;
  InvokeModuleInput: InvokeModuleInput;
  InvokeModulePayload: InvokeModulePayload;
  Item: Item;
  ItemConnection: ItemConnection;
  ItemFilter: ItemFilter;
  Log: Log;
  LogConnection: LogConnection;
  LogFilter: LogFilter;
  Meta: Meta;
  MetaInput: MetaInput;
  Module: Module;
  ModuleConnection: ModuleConnection;
  Mutation: {};
  Node: ResolversParentTypes['Account'] | ResolversParentTypes['Asset'] | ResolversParentTypes['Module'] | ResolversParentTypes['Package'] | ResolversParentTypes['Parameter'] | ResolversParentTypes['Service'] | ResolversParentTypes['UserAccounts'] | ResolversParentTypes['Workflow'];
  Package: Package;
  PackageConnection: PackageConnection;
  Parameter: Parameter;
  ParameterConnection: ParameterConnection;
  Query: {};
  Service: Service;
  ServiceConnection: ServiceConnection;
  SetAccountAccessInput: SetAccountAccessInput;
  SetAccountAccessPayload: SetAccountAccessPayload;
  Stack: Stack;
  StackCollection: StackCollection;
  StackService: StackService;
  StackView: StackView;
  StackWorkflow: StackWorkflow;
  String: Scalars['String'];
  StringFilterInput: StringFilterInput;
  Subscription: {};
  TriggerWorkflowInput: TriggerWorkflowInput;
  TriggerWorkflowPayload: TriggerWorkflowPayload;
  UpdateAssetInput: UpdateAssetInput;
  UpdateAssetPayload: UpdateAssetPayload;
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: UpdateCollectionPayload;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: UpdateItemPayload;
  UpdateModuleInput: UpdateModuleInput;
  UpdateModulePayload: UpdateModulePayload;
  UpdatePackageInput: UpdatePackageInput;
  UpdatePackagePayload: UpdatePackagePayload;
  UpdateParameterInput: UpdateParameterInput;
  UpdateParameterPayload: UpdateParameterPayload;
  UpdateServiceInput: UpdateServiceInput;
  UpdateServicePayload: UpdateServicePayload;
  UpdateViewInput: UpdateViewInput;
  UpdateViewPayload: UpdateViewPayload;
  UpdateWorkflowInput: UpdateWorkflowInput;
  UpdateWorkflowPayload: UpdateWorkflowPayload;
  UserAccess: UserAccess;
  UserAccounts: UserAccounts;
  UserAccountsConnection: UserAccountsConnection;
  ValidateCollectionInput: ValidateCollectionInput;
  ValidateCollectionPayload: ValidateCollectionPayload;
  ValidatePackageInput: ValidatePackageInput;
  ValidatePackagePayload: ValidatePackagePayload;
  ValidateParameterInput: ValidateParameterInput;
  ValidateParameterPayload: ValidateParameterPayload;
  ValidateServiceInput: ValidateServiceInput;
  ValidateServicePayload: ValidateServicePayload;
  ValidateViewInput: ValidateViewInput;
  ValidateViewPayload: ValidateViewPayload;
  ValidateWorkflowInput: ValidateWorkflowInput;
  ValidateWorkflowPayload: ValidateWorkflowPayload;
  View: View;
  ViewConnection: ViewConnection;
  ViewUsage: ViewUsage;
  Workflow: Workflow;
  WorkflowConnection: WorkflowConnection;
  WorkflowError: WorkflowError;
  WorkflowUsage: WorkflowUsage;
};

export type Aws_Api_KeyDirectiveArgs = { };

export type Aws_Api_KeyDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_Api_KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_AuthDirectiveArgs = {
  cognito_groups: Array<Scalars['String']>;
};

export type Aws_AuthDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_Cognito_User_PoolsDirectiveArgs = {
  cognito_groups?: Maybe<Array<Scalars['String']>>;
};

export type Aws_Cognito_User_PoolsDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_Cognito_User_PoolsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_IamDirectiveArgs = { };

export type Aws_IamDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_IamDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_OidcDirectiveArgs = { };

export type Aws_OidcDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_OidcDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_SubscribeDirectiveArgs = {
  mutations: Array<Scalars['String']>;
};

export type Aws_SubscribeDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_SubscribeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface AwsDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDate'], any> {
  name: 'AWSDate';
}

export interface AwsDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDateTime'], any> {
  name: 'AWSDateTime';
}

export interface AwsEmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSEmail'], any> {
  name: 'AWSEmail';
}

export interface AwsipAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSIPAddress'], any> {
  name: 'AWSIPAddress';
}

export interface AwsjsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSJSON'], any> {
  name: 'AWSJSON';
}

export interface AwsPhoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSPhone'], any> {
  name: 'AWSPhone';
}

export interface AwsTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSTime'], any> {
  name: 'AWSTime';
}

export interface AwsTimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSTimestamp'], any> {
  name: 'AWSTimestamp';
}

export interface AwsurlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSURL'], any> {
  name: 'AWSURL';
}

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserAccess']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  usage?: Resolver<Maybe<ResolversTypes['AccountUsage']>, ParentType, ContextType, Partial<AccountUsageArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountUsage'] = ResolversParentTypes['AccountUsage']> = {
  request?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runtime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetConnection'] = ResolversParentTypes['AssetConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatchCreateItemsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchCreateItemsPayload'] = ResolversParentTypes['BatchCreateItemsPayload']> = {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatchDeleteItemsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchDeleteItemsPayload'] = ResolversParentTypes['BatchDeleteItemsPayload']> = {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insight?: Resolver<Maybe<ResolversTypes['CollectionInsight']>, ParentType, ContextType, RequireFields<CollectionInsightArgs, 'interval' | 'query'>>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mapping?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  projection?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  queries?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggers?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  usage?: Resolver<Maybe<ResolversTypes['CollectionUsage']>, ParentType, ContextType, Partial<CollectionUsageArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Collection']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionInsightResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionInsight'] = ResolversParentTypes['CollectionInsight']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionUsage'] = ResolversParentTypes['CollectionUsage']> = {
  storage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAssetPayload'] = ResolversParentTypes['CreateAssetPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionPayload'] = ResolversParentTypes['CreateCollectionPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateItemPayload'] = ResolversParentTypes['CreateItemPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateModulePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateModulePayload'] = ResolversParentTypes['CreateModulePayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePackagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePackagePayload'] = ResolversParentTypes['CreatePackagePayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateParameterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateParameterPayload'] = ResolversParentTypes['CreateParameterPayload']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateServicePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateServicePayload'] = ResolversParentTypes['CreateServicePayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSignedPostPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSignedPostPayload'] = ResolversParentTypes['CreateSignedPostPayload']> = {
  endpoint?: Resolver<ResolversTypes['AWSURL'], ParentType, ContextType>;
  expiry?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  policy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateViewPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateViewPayload'] = ResolversParentTypes['CreateViewPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateWorkflowPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateWorkflowPayload'] = ResolversParentTypes['CreateWorkflowPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAssetPayload'] = ResolversParentTypes['DeleteAssetPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteCollectionPayload'] = ResolversParentTypes['DeleteCollectionPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteItemPayload'] = ResolversParentTypes['DeleteItemPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteModulePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteModulePayload'] = ResolversParentTypes['DeleteModulePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePackagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePackagePayload'] = ResolversParentTypes['DeletePackagePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteParameterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteParameterPayload'] = ResolversParentTypes['DeleteParameterPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteServicePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteServicePayload'] = ResolversParentTypes['DeleteServicePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteViewPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteViewPayload'] = ResolversParentTypes['DeleteViewPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWorkflowPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteWorkflowPayload'] = ResolversParentTypes['DeleteWorkflowPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeployStackPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeployStackPayload'] = ResolversParentTypes['DeployStackPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyStackPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyStackPayload'] = ResolversParentTypes['DestroyStackPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DoubleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Double'], any> {
  name: 'Double';
}

export type ElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Element'] = ResolversParentTypes['Element']> = {
  __resolveType: TypeResolveFn<'Item', ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
};

export type InvokeModulePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvokeModulePayload'] = ResolversParentTypes['InvokeModulePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['LogStatus']>, ParentType, ContextType>;
  triggeredAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workflowId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogConnection'] = ResolversParentTypes['LogConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Log']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repository?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['ModuleScope']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModuleConnection'] = ResolversParentTypes['ModuleConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Module']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  batchCreateItems?: Resolver<ResolversTypes['BatchCreateItemsPayload'], ParentType, ContextType, Partial<MutationBatchCreateItemsArgs>>;
  batchDeleteItems?: Resolver<ResolversTypes['BatchDeleteItemsPayload'], ParentType, ContextType, Partial<MutationBatchDeleteItemsArgs>>;
  createAsset?: Resolver<ResolversTypes['CreateAssetPayload'], ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'input'>>;
  createCollection?: Resolver<ResolversTypes['CreateCollectionPayload'], ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'input'>>;
  createItem?: Resolver<ResolversTypes['CreateItemPayload'], ParentType, ContextType, RequireFields<MutationCreateItemArgs, 'input'>>;
  createModule?: Resolver<ResolversTypes['CreateModulePayload'], ParentType, ContextType, RequireFields<MutationCreateModuleArgs, 'input'>>;
  createParameter?: Resolver<ResolversTypes['CreateParameterPayload'], ParentType, ContextType, RequireFields<MutationCreateParameterArgs, 'input'>>;
  createService?: Resolver<ResolversTypes['CreateServicePayload'], ParentType, ContextType, RequireFields<MutationCreateServiceArgs, 'input'>>;
  createSignedPost?: Resolver<ResolversTypes['CreateSignedPostPayload'], ParentType, ContextType>;
  createView?: Resolver<ResolversTypes['CreateViewPayload'], ParentType, ContextType, RequireFields<MutationCreateViewArgs, 'input'>>;
  createWorkflow?: Resolver<Maybe<ResolversTypes['CreateWorkflowPayload']>, ParentType, ContextType, RequireFields<MutationCreateWorkflowArgs, 'input'>>;
  deleteAsset?: Resolver<ResolversTypes['DeleteAssetPayload'], ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'input'>>;
  deleteCollection?: Resolver<ResolversTypes['DeleteCollectionPayload'], ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'input'>>;
  deleteItem?: Resolver<ResolversTypes['DeleteItemPayload'], ParentType, ContextType, RequireFields<MutationDeleteItemArgs, 'input'>>;
  deleteModule?: Resolver<ResolversTypes['DeleteModulePayload'], ParentType, ContextType, RequireFields<MutationDeleteModuleArgs, 'input'>>;
  deleteParameter?: Resolver<ResolversTypes['DeleteParameterPayload'], ParentType, ContextType, RequireFields<MutationDeleteParameterArgs, 'input'>>;
  deleteService?: Resolver<ResolversTypes['DeleteServicePayload'], ParentType, ContextType, RequireFields<MutationDeleteServiceArgs, 'input'>>;
  deleteView?: Resolver<ResolversTypes['DeleteViewPayload'], ParentType, ContextType, RequireFields<MutationDeleteViewArgs, 'input'>>;
  deleteWorkflow?: Resolver<Maybe<ResolversTypes['DeleteWorkflowPayload']>, ParentType, ContextType, RequireFields<MutationDeleteWorkflowArgs, 'input'>>;
  deployStack?: Resolver<ResolversTypes['DeployStackPayload'], ParentType, ContextType, RequireFields<MutationDeployStackArgs, 'input'>>;
  destroyStack?: Resolver<ResolversTypes['DestroyStackPayload'], ParentType, ContextType, RequireFields<MutationDestroyStackArgs, 'input'>>;
  invokeModule?: Resolver<ResolversTypes['InvokeModulePayload'], ParentType, ContextType, RequireFields<MutationInvokeModuleArgs, 'input'>>;
  setAccountAccess?: Resolver<ResolversTypes['SetAccountAccessPayload'], ParentType, ContextType, RequireFields<MutationSetAccountAccessArgs, 'input'>>;
  triggerWorkflow?: Resolver<Maybe<ResolversTypes['TriggerWorkflowPayload']>, ParentType, ContextType, RequireFields<MutationTriggerWorkflowArgs, 'input'>>;
  updateAsset?: Resolver<ResolversTypes['UpdateAssetPayload'], ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'input'>>;
  updateCollection?: Resolver<ResolversTypes['UpdateCollectionPayload'], ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'input'>>;
  updateItem?: Resolver<ResolversTypes['UpdateItemPayload'], ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input'>>;
  updateModule?: Resolver<ResolversTypes['UpdateModulePayload'], ParentType, ContextType, RequireFields<MutationUpdateModuleArgs, 'input'>>;
  updateParameter?: Resolver<ResolversTypes['UpdateParameterPayload'], ParentType, ContextType, RequireFields<MutationUpdateParameterArgs, 'input'>>;
  updateService?: Resolver<ResolversTypes['UpdateServicePayload'], ParentType, ContextType, RequireFields<MutationUpdateServiceArgs, 'input'>>;
  updateView?: Resolver<ResolversTypes['UpdateViewPayload'], ParentType, ContextType, RequireFields<MutationUpdateViewArgs, 'input'>>;
  updateWorkflow?: Resolver<Maybe<ResolversTypes['UpdateWorkflowPayload']>, ParentType, ContextType, RequireFields<MutationUpdateWorkflowArgs, 'input'>>;
  validateCollection?: Resolver<ResolversTypes['ValidateCollectionPayload'], ParentType, ContextType, RequireFields<MutationValidateCollectionArgs, 'input'>>;
  validateParameter?: Resolver<ResolversTypes['ValidateParameterPayload'], ParentType, ContextType, RequireFields<MutationValidateParameterArgs, 'input'>>;
  validateService?: Resolver<ResolversTypes['ValidateServicePayload'], ParentType, ContextType, RequireFields<MutationValidateServiceArgs, 'input'>>;
  validateView?: Resolver<ResolversTypes['ValidateViewPayload'], ParentType, ContextType, RequireFields<MutationValidateViewArgs, 'input'>>;
  validateWorkflow?: Resolver<ResolversTypes['ValidateWorkflowPayload'], ParentType, ContextType, RequireFields<MutationValidateWorkflowArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Account' | 'Asset' | 'Module' | 'Package' | 'Parameter' | 'Service' | 'UserAccounts' | 'Workflow', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PackageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Package'] = ResolversParentTypes['Package']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['PackageScope']>, ParentType, ContextType>;
  stack?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackageConnection'] = ResolversParentTypes['PackageConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Package']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParameterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parameter'] = ResolversParentTypes['Parameter']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParameterConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParameterConnection'] = ResolversParentTypes['ParameterConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Parameter']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assets?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, Partial<QueryAssetsArgs>>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType, RequireFields<QueryCollectionArgs, 'id'>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, Partial<QueryCollectionsArgs>>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  items?: Resolver<Maybe<ResolversTypes['ItemConnection']>, ParentType, ContextType, RequireFields<QueryItemsArgs, 'collectionId'>>;
  logs?: Resolver<ResolversTypes['LogConnection'], ParentType, ContextType, RequireFields<QueryLogsArgs, 'serviceId'>>;
  memberships?: Resolver<Maybe<ResolversTypes['UserAccountsConnection']>, ParentType, ContextType>;
  module?: Resolver<ResolversTypes['Module'], ParentType, ContextType, RequireFields<QueryModuleArgs, 'id'>>;
  modules?: Resolver<Maybe<ResolversTypes['ModuleConnection']>, ParentType, ContextType, Partial<QueryModulesArgs>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  parameter?: Resolver<ResolversTypes['Parameter'], ParentType, ContextType, RequireFields<QueryParameterArgs, 'id'>>;
  parameters?: Resolver<Maybe<ResolversTypes['ParameterConnection']>, ParentType, ContextType, Partial<QueryParametersArgs>>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<QueryServiceArgs, 'id'>>;
  services?: Resolver<ResolversTypes['ServiceConnection'], ParentType, ContextType, Partial<QueryServicesArgs>>;
  view?: Resolver<ResolversTypes['View'], ParentType, ContextType, RequireFields<QueryViewArgs, 'id'>>;
  views?: Resolver<ResolversTypes['ViewConnection'], ParentType, ContextType, Partial<QueryViewsArgs>>;
  workflow?: Resolver<ResolversTypes['Workflow'], ParentType, ContextType, RequireFields<QueryWorkflowArgs, 'id'>>;
  workflows?: Resolver<ResolversTypes['WorkflowConnection'], ParentType, ContextType, Partial<QueryWorkflowsArgs>>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceConnection'] = ResolversParentTypes['ServiceConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Service']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetAccountAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetAccountAccessPayload'] = ResolversParentTypes['SetAccountAccessPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _empty?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "_empty", ParentType, ContextType>;
};

export type TriggerWorkflowPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['TriggerWorkflowPayload'] = ResolversParentTypes['TriggerWorkflowPayload']> = {
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WorkflowError']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['WorkflowStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAssetPayload'] = ResolversParentTypes['UpdateAssetPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionPayload'] = ResolversParentTypes['UpdateCollectionPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateItemPayload'] = ResolversParentTypes['UpdateItemPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateModulePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateModulePayload'] = ResolversParentTypes['UpdateModulePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePackagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePackagePayload'] = ResolversParentTypes['UpdatePackagePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateParameterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateParameterPayload'] = ResolversParentTypes['UpdateParameterPayload']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateServicePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateServicePayload'] = ResolversParentTypes['UpdateServicePayload']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateViewPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateViewPayload'] = ResolversParentTypes['UpdateViewPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWorkflowPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateWorkflowPayload'] = ResolversParentTypes['UpdateWorkflowPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccess'] = ResolversParentTypes['UserAccess']> = {
  permission?: Resolver<Maybe<ResolversTypes['AccessType']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccountsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccounts'] = ResolversParentTypes['UserAccounts']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permission?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccountsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccountsConnection'] = ResolversParentTypes['UserAccountsConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserAccounts']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateCollectionPayload'] = ResolversParentTypes['ValidateCollectionPayload']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mapping?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  projection?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  queries?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  serviceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggers?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatePackagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidatePackagePayload'] = ResolversParentTypes['ValidatePackagePayload']> = {
  data?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repository?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['PackageScope']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateParameterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateParameterPayload'] = ResolversParentTypes['ValidateParameterPayload']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateServicePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateServicePayload'] = ResolversParentTypes['ValidateServicePayload']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateViewPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateViewPayload'] = ResolversParentTypes['ValidateViewPayload']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateWorkflowPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateWorkflowPayload'] = ResolversParentTypes['ValidateWorkflowPayload']> = {
  definition?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['View'] = ResolversParentTypes['View']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  usage?: Resolver<Maybe<ResolversTypes['ViewUsage']>, ParentType, ContextType, Partial<ViewUsageArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewConnection'] = ResolversParentTypes['ViewConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['View']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewUsage'] = ResolversParentTypes['ViewUsage']> = {
  request?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workflow'] = ResolversParentTypes['Workflow']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  definition?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['AWSDateTime']>, ParentType, ContextType>;
  usage?: Resolver<Maybe<ResolversTypes['WorkflowUsage']>, ParentType, ContextType, Partial<WorkflowUsageArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkflowConnection'] = ResolversParentTypes['WorkflowConnection']> = {
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Workflow']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkflowError'] = ResolversParentTypes['WorkflowError']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkflowUsage'] = ResolversParentTypes['WorkflowUsage']> = {
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AWSDate?: GraphQLScalarType;
  AWSDateTime?: GraphQLScalarType;
  AWSEmail?: GraphQLScalarType;
  AWSIPAddress?: GraphQLScalarType;
  AWSJSON?: GraphQLScalarType;
  AWSPhone?: GraphQLScalarType;
  AWSTime?: GraphQLScalarType;
  AWSTimestamp?: GraphQLScalarType;
  AWSURL?: GraphQLScalarType;
  Account?: AccountResolvers<ContextType>;
  AccountUsage?: AccountUsageResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetConnection?: AssetConnectionResolvers<ContextType>;
  BatchCreateItemsPayload?: BatchCreateItemsPayloadResolvers<ContextType>;
  BatchDeleteItemsPayload?: BatchDeleteItemsPayloadResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  CollectionInsight?: CollectionInsightResolvers<ContextType>;
  CollectionUsage?: CollectionUsageResolvers<ContextType>;
  CreateAssetPayload?: CreateAssetPayloadResolvers<ContextType>;
  CreateCollectionPayload?: CreateCollectionPayloadResolvers<ContextType>;
  CreateItemPayload?: CreateItemPayloadResolvers<ContextType>;
  CreateModulePayload?: CreateModulePayloadResolvers<ContextType>;
  CreatePackagePayload?: CreatePackagePayloadResolvers<ContextType>;
  CreateParameterPayload?: CreateParameterPayloadResolvers<ContextType>;
  CreateServicePayload?: CreateServicePayloadResolvers<ContextType>;
  CreateSignedPostPayload?: CreateSignedPostPayloadResolvers<ContextType>;
  CreateViewPayload?: CreateViewPayloadResolvers<ContextType>;
  CreateWorkflowPayload?: CreateWorkflowPayloadResolvers<ContextType>;
  DeleteAssetPayload?: DeleteAssetPayloadResolvers<ContextType>;
  DeleteCollectionPayload?: DeleteCollectionPayloadResolvers<ContextType>;
  DeleteItemPayload?: DeleteItemPayloadResolvers<ContextType>;
  DeleteModulePayload?: DeleteModulePayloadResolvers<ContextType>;
  DeletePackagePayload?: DeletePackagePayloadResolvers<ContextType>;
  DeleteParameterPayload?: DeleteParameterPayloadResolvers<ContextType>;
  DeleteServicePayload?: DeleteServicePayloadResolvers<ContextType>;
  DeleteViewPayload?: DeleteViewPayloadResolvers<ContextType>;
  DeleteWorkflowPayload?: DeleteWorkflowPayloadResolvers<ContextType>;
  DeployStackPayload?: DeployStackPayloadResolvers<ContextType>;
  DestroyStackPayload?: DestroyStackPayloadResolvers<ContextType>;
  Double?: GraphQLScalarType;
  Element?: ElementResolvers<ContextType>;
  InvokeModulePayload?: InvokeModulePayloadResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  LogConnection?: LogConnectionResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Module?: ModuleResolvers<ContextType>;
  ModuleConnection?: ModuleConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Package?: PackageResolvers<ContextType>;
  PackageConnection?: PackageConnectionResolvers<ContextType>;
  Parameter?: ParameterResolvers<ContextType>;
  ParameterConnection?: ParameterConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  ServiceConnection?: ServiceConnectionResolvers<ContextType>;
  SetAccountAccessPayload?: SetAccountAccessPayloadResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TriggerWorkflowPayload?: TriggerWorkflowPayloadResolvers<ContextType>;
  UpdateAssetPayload?: UpdateAssetPayloadResolvers<ContextType>;
  UpdateCollectionPayload?: UpdateCollectionPayloadResolvers<ContextType>;
  UpdateItemPayload?: UpdateItemPayloadResolvers<ContextType>;
  UpdateModulePayload?: UpdateModulePayloadResolvers<ContextType>;
  UpdatePackagePayload?: UpdatePackagePayloadResolvers<ContextType>;
  UpdateParameterPayload?: UpdateParameterPayloadResolvers<ContextType>;
  UpdateServicePayload?: UpdateServicePayloadResolvers<ContextType>;
  UpdateViewPayload?: UpdateViewPayloadResolvers<ContextType>;
  UpdateWorkflowPayload?: UpdateWorkflowPayloadResolvers<ContextType>;
  UserAccess?: UserAccessResolvers<ContextType>;
  UserAccounts?: UserAccountsResolvers<ContextType>;
  UserAccountsConnection?: UserAccountsConnectionResolvers<ContextType>;
  ValidateCollectionPayload?: ValidateCollectionPayloadResolvers<ContextType>;
  ValidatePackagePayload?: ValidatePackagePayloadResolvers<ContextType>;
  ValidateParameterPayload?: ValidateParameterPayloadResolvers<ContextType>;
  ValidateServicePayload?: ValidateServicePayloadResolvers<ContextType>;
  ValidateViewPayload?: ValidateViewPayloadResolvers<ContextType>;
  ValidateWorkflowPayload?: ValidateWorkflowPayloadResolvers<ContextType>;
  View?: ViewResolvers<ContextType>;
  ViewConnection?: ViewConnectionResolvers<ContextType>;
  ViewUsage?: ViewUsageResolvers<ContextType>;
  Workflow?: WorkflowResolvers<ContextType>;
  WorkflowConnection?: WorkflowConnectionResolvers<ContextType>;
  WorkflowError?: WorkflowErrorResolvers<ContextType>;
  WorkflowUsage?: WorkflowUsageResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  aws_api_key?: Aws_Api_KeyDirectiveResolver<any, any, ContextType>;
  aws_auth?: Aws_AuthDirectiveResolver<any, any, ContextType>;
  aws_cognito_user_pools?: Aws_Cognito_User_PoolsDirectiveResolver<any, any, ContextType>;
  aws_iam?: Aws_IamDirectiveResolver<any, any, ContextType>;
  aws_oidc?: Aws_OidcDirectiveResolver<any, any, ContextType>;
  aws_subscribe?: Aws_SubscribeDirectiveResolver<any, any, ContextType>;
};
