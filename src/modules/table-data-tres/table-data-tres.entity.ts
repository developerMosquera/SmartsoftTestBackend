import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tableDataTres')
export class TableDataTresEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    T3C1: number;

    @Column({ type: 'varchar', length: 50 })
    T3C2: string;

    @Column({ type: 'datetime', nullable: false })
    T3C3: string;

}