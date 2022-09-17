import { format } from "date-fns";
import { nanoid } from "nanoid";
import { DATE_FORMAT } from "../constants.js";

const createShoeModel = (db) => {
    const create = async (shoe) => {
        const newShoe = {
            id: nanoid(),
            createdAt: format(new Date(), DATE_FORMAT),
            ...shoe,
        };

        db.data.shoes.push(newShoe);
        await db.write();

        return newShoe;
    };

    const findById = (id) => {
        return db.chain.get("shoes").find({ id }).value();
    };

    const find = (filter) => {
        return db.chain.get("shoes").filter(filter).value();
    };

    return { create, findById, find };
};

export default createShoeModel;
