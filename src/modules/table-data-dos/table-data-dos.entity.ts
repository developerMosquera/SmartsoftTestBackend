import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tableDataDos')
export class TableDataDosEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar' })
    T2C1: string;

    @Column({ type: 'varchar', length: 50 })
    T2C2: string;

    @Column({ type: 'int', nullable: false })
    T2C3: number;

    @Column({ type: 'datetime', nullable: false })
    T2C4: string;

    @Column({ type: 'int' })
    T2C5: number;

}