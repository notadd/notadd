import { bootstrap as db } from '../bootstrap'
export async function bootstrap() {
    await db();
}
bootstrap();