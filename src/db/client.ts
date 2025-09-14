import 'dotenv/config';
import '@/lib/envConfig'
import { drizzle } from 'drizzle-orm/libsql';

const fileName = process.env.DB_FILE_NAME;

if (!fileName) {
  throw new Error("SQLiteのファイル名が環境変数で設定されていないです。");
}

export const client = drizzle(fileName);
