import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany } from 'typeorm';
import { TableStructureEntity } from '../table-structure/table-structure.entity';

@Entity('tableType')
export class TableTypeEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 30 })
    name: string

    @OneToMany( type => TableStructureEntity, structure => structure.tableTypeR)
    columns: TableStructureEntity[];
    
}