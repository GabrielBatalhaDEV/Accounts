import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class UpdateUsersCategory1633032509945 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "accounts",
      new TableColumn({
        name: "category",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      "accounts",
      new TableColumn({ name: "category", type: "varchar" })
    );
  }
}
