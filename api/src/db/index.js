import lodash from 'lodash';
import { JSONFile, Low } from "lowdb";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import createShoeModel from "./shoe.js";
import createUserModel from "./user.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.chain = lodash.chain(db.data);

export const models = {
    User: createUserModel(db),
    Shoe: createShoeModel(db)
}

export default db;
