import { Entity, Property, SerializedPrimaryKey } from "@mikro-orm/core";

@Entity()
export class Post {
  @SerializedPrimaryKey()
  id!: string;

  @Property()
  title!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

}
