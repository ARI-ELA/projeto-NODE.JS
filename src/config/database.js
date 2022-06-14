module.exports = {
    dialect: 'postgres',
    //url: 'postgres://ashohmuw:iPn7K9RsUNMQuaY2wxXJ_R2rXquE8s8J@queenie.db.elephantsql.com/ashohmuw',
    host: 'queenie.db.elephantsql.com',
    username:'ashohmuw',
    password:'iPn7K9RsUNMQuaY2wxXJ_R2rXquE8s8J',
    database: 'ashohmuw',
    //logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    // sslmode: 'required',
    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false,
    //     },
    //},
};