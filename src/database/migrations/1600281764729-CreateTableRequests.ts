import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableRequests1600281764729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'requests',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'items_list',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'credit_cart',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
          {
            name: 'delivery_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'total',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('requests');
  }
}