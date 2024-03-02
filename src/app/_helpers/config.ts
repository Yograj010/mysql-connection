interface Configs {
    mongoDbHost: string;
    mongoDbPort: string;
    mongoCollectionName: string;
    sqlDbHost: string;
    sqlDbPort: string;
    sqlDbName: string;
    sqlUsername: string;
    sqlPassword: string;
    globalErrorMessage: string;
    serverHost: string;
    serverPort: string;
}

const configs: Configs = {
    mongoDbHost: process.env.MONGO_DB_HOST || "localhost",
    mongoDbPort: process.env.MONGO_DB_PORT || "27017",
    mongoCollectionName: process.env.MONGO_DB_NAME || "signup",

    sqlDbHost: process.env.SQL_DB_HOST || "localhost",
    sqlDbPort: process.env.SQL_DB_PORT || "27017",
    sqlDbName: process.env.SQL_DB_NAME || "signup",
    sqlUsername: process.env.SQL_DB_NAME || "root",
    sqlPassword: process.env.SQL_DB_NAME || "Pass@123",

    serverHost: process.env.HOST || "localhost",
    serverPort: process.env.PORT || "3000",

    globalErrorMessage: "Something went wrong, please try again later",
}

export default configs;