import { ValueObject } from "../value-objects/index.ts";

export interface IEntity<Id extends ValueObject> {
  id: Id;
  toJSON(): object;
}
