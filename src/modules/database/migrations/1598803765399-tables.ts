import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1598803765399 implements MigrationInterface {
    name = 'tables1598803765399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tableDataDos` (`id` int NOT NULL AUTO_INCREMENT, `T2C1` int NOT NULL, `T2C2` varchar(50) NOT NULL, `T2C3` int NOT NULL, `T2C4` datetime NOT NULL, `T2C5` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tableDataTres` (`id` int NOT NULL AUTO_INCREMENT, `T3C1` int NOT NULL, `T3C2` varchar(50) NOT NULL, `T3C3` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tableDataUno` (`id` int NOT NULL AUTO_INCREMENT, `T1C1` int NOT NULL, `T1C2` varchar(50) NOT NULL, `T1C3` int NOT NULL, `T1C4` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tableType` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(30) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tableStructure` (`id` int NOT NULL AUTO_INCREMENT, `header` varchar(30) NOT NULL, `dataType` varchar(10) NOT NULL, `format` varchar(255) NOT NULL, `require` varchar(5) NOT NULL, `tableTypeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `tableStructure` ADD CONSTRAINT `FK_ba6b7e1e3bfb817bcf3edab7eb5` FOREIGN KEY (`tableTypeId`) REFERENCES `tableType`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tableStructure` DROP FOREIGN KEY `FK_ba6b7e1e3bfb817bcf3edab7eb5`");
        await queryRunner.query("DROP TABLE `tableStructure`");
        await queryRunner.query("DROP TABLE `tableType`");
        await queryRunner.query("DROP TABLE `tableDataUno`");
        await queryRunner.query("DROP TABLE `tableDataTres`");
        await queryRunner.query("DROP TABLE `tableDataDos`");
    }

}
