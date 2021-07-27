import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccounts1627156816273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:"accounts",
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true
                },
                {
                    name:"id_user",
                    type:"uuid"
                },
                {
                    name:"title",
                    type:"varchar"
                },
                {
                    name:"login",
                    type:"varchar",
                    isNullable:true
                },
                {
                    name:"password",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"extras",
                    type:"json",
                    isNullable: true
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"updated_at",
                    type:"timestamp",
                    default:"now()"
                }
            ],
            foreignKeys:[
                {
                    name:"FKUserId",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames:["id_user"],
                    onDelete: "SET NULL"
                }
            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("accounts")
    }

}
