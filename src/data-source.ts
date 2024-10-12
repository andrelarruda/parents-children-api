import "reflect-metadata"
import { DataSource } from "typeorm"
import { Parent } from "./entity/Parent"
import { Child } from "./entity/Child"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [
        Parent,
        Child,
    ],
    migrations: [],
    subscribers: [],
})
