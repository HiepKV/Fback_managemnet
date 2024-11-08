import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1730796346875 implements MigrationInterface {
    name = 'CreateTableUser1730796346875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "department" ("depart_id" SERIAL NOT NULL, "name" character varying NOT NULL, "number_room" integer NOT NULL, CONSTRAINT "PK_520e8c58c13e02aa900ae6feb53" PRIMARY KEY ("depart_id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "password" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "departmentDepartId" integer, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name_role" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_role" ("employee_id" integer NOT NULL, "role_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "employeeId" integer, "roleId" integer, CONSTRAINT "PK_f4f8cc16eb631319acc69a628b4" PRIMARY KEY ("employee_id", "role_id"))`);
        await queryRunner.query(`CREATE TABLE "ticket" ("ticket_id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "employeeId" integer, CONSTRAINT "PK_a7b0a31430509c3d3e22832e341" PRIMARY KEY ("ticket_id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_e3cca43de498feb9b3c33e60baa" FOREIGN KEY ("departmentDepartId") REFERENCES "department"("depart_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_role" ADD CONSTRAINT "FK_607b4ff74f9698b5ceb556cac36" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_role" ADD CONSTRAINT "FK_4dbe0daece0cd855070580d6d1e" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ticket" ADD CONSTRAINT "FK_f459a0ccb58639f4cb62ca54b0f" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ticket" DROP CONSTRAINT "FK_f459a0ccb58639f4cb62ca54b0f"`);
        await queryRunner.query(`ALTER TABLE "employee_role" DROP CONSTRAINT "FK_4dbe0daece0cd855070580d6d1e"`);
        await queryRunner.query(`ALTER TABLE "employee_role" DROP CONSTRAINT "FK_607b4ff74f9698b5ceb556cac36"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_e3cca43de498feb9b3c33e60baa"`);
        await queryRunner.query(`DROP TABLE "ticket"`);
        await queryRunner.query(`DROP TABLE "employee_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "department"`);
    }

}
