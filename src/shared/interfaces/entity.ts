import { Uuid } from "../value-objects/index.ts";

export interface IEntity {
  id: Uuid;
  toJSON(): object;
}
