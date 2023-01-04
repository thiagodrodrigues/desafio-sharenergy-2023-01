import mongoose from "mongoose";
import { UsersEntity } from "../../../../domain/entities/users/type.users.entity";

export default mongoose.model<UsersEntity>(
    `users`,
    new mongoose.Schema({
        name: `string`,
        email: `string`,
        password: `string`,
        photo: `string`,
        age: `number`,
        username: `string`
    })
);