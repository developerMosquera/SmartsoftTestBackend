import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tableDataUno')
export class TableDataUnoEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    T1C1: number;

    @Column({ type: 'varchar', length: 50 })
    T1C2: string;

    @Column({ type: 'int', nullable: false })
    T1C3: number;

    @Column({ type: 'datetime', nullable: false })
    T1C4: string;

}