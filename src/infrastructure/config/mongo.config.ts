import 'dotenv/config';

const mongoConfig = {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_NAME
}

if(process.env.NODE_ENV === 'production'){
    Object.assign(
        mongoConfig,
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }
    )
}

export default mongoConfig;