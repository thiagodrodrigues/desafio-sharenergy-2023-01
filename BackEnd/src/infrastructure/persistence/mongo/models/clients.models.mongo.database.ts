import mongoose from "mongoose";

export default mongoose.model(
    `clients`,
    new mongoose.Schema({
        name: `string`,
        email: `string`,
        phone: `string`,
        address: `string`,
        cpf: `number`
    })
);