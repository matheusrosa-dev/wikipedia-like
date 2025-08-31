import { Uuid } from "../value-objects";

export interface IEntity {
  id: Uuid;
  toJSON(): object;
}
