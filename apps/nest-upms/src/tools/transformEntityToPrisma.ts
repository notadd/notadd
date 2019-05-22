import { PrismaCreator } from './prisma'
import { ClassDeclaration, SourceFile, Project } from 'ts-morph'
export function transformEntityToPrisma(cls: ClassDeclaration, file: SourceFile, project: Project, creater: PrismaCreator) {
    creater.addEntity(cls, file, project)
}
