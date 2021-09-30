import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Users } from "./Users";

@Entity("accounts")
class Accounts {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  id_user: string;

  @JoinColumn({ name: "id_user" })
  @ManyToOne(() => Users)
  userId: string;

  @Column()
  title: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ array: true })
  categories: string;

  @Column()
  extras: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Accounts };
