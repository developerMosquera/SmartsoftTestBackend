import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { TableTypeEntity } from '../table-type/table-type.entity';

@Entity('tableStructure')
export class TableStructureEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne( type => TableTypeEntity, tableType => tableType.columns)
    @JoinColumn({ name: 'tableTypeId' })
    tableTypeR: TableTypeEntity;

    @Column({ type: 'varchar', length: 30 })
    header: string;

    @Column({ type: 'varchar', length: 10 })
    dataType: string;

    @Column({ type: 'varchar', nullable: false })
    format: string;

    @Column({ type: 'varchar', length: 5 })
    require: boolean

}