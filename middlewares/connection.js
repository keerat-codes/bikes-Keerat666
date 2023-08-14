const pg = require('pg');
let client;

async function connect() {
    console.log('>>>> Connecting to YugabyteDB!');

    try {
        var connectionString = "postgresql://admin:qitwAm-2toxje-buwgym@ap-south-1.93aecd7e-7608-4eaf-a040-71b860778906.aws.ybdb.io:5433/yugabyte?ssl=true&sslmode=verify-full&sslrootcert=/Users/keerat/Desktop/AutoPilot/middlewares/root.crt";        
        client = new pg.Client(connectionString);
        await client.connect();

        return client;

    } catch (err) {
        console.error('Error connecting to YugabyteDB:', err);
        throw err;  // Re-throw the error to be caught by the caller if needed
    }
}

module.exports = {
    connect,
    client
};
