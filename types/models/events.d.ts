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
