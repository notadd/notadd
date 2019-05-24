import { getIp } from './getIp'
import { join } from 'path'
import { writeFileSync, ensureDirSync, existsSync } from 'fs-extra';
const root = process.cwd();
export function createPrismaYml() {
    const ip = getIp();
    return `
version: '3'
services:
    prisma:
    image: prismagraphql/prisma:1.33
    restart: always
    ports:
        - "4466:4466"
    environment:
        PRISMA_CONFIG: |
        port: 4466
        # uncomment the next line and provide the env var PRISMA_MANAGEMENT_API_SECRET=my-secret to activate cluster security
        # managementApiSecret: my-secret
        databases:
            default:
            connector: postgres
            host: 192.168.1.146
            database: test_ci
            schema: public
            user: postgres
            password: postgres
            ssl: false
            rawAccess: true
            port: '5432'
            migrations: false
`
}

export function createPrismaConfig() {
    return `endpoint: http://localhost:4466
datamodel: ../../apps/nest-upms/src/main.prisma
generate:
    - generator: typescript-client
    output: ../../apps/nest-upms/src/prisma`
}

export function createPostgres() {
    return `version: '3'
services:
    postgres:
    image: postgres:11-alpine
    notadd: postgres
    restart: always
    # Uncomment the next two lines to connect to your your database from outside the Docker environment, e.g. using a database GUI like Postico
    ports:
        - "5432:5432"
    environment:
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: postgres
        POSTGRES_DB: test_ci
volumes:
    postgres:
`
}

export function create() {
    createFile(join(root, 'config/notadd/docker-compose.yml'), createPrismaConfig());
    createFile(join(root, 'config/notadd/prisma.yml'), createPrismaConfig());
    createFile(join(root, 'config/postgres/docker-compose.yml'), createPostgres());
}

export function createFile(path: string, content: string) {
    if (existsSync(path)) {
        // 已存在
    } else {
        ensureDirSync(path)
        writeFileSync(path, content)
    }
}
