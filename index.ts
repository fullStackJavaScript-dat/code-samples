import * as mongo from "mongodb";
const MongoClient = mongo.MongoClient;
const uri = "INSERT_YOUR_CONNECTION_STRING";

/* IMPORTANT ---> 
   Before you start, do a tcs --init in the root of the project to create tsconfig.json
*/

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function insertAndReadData() {
    try {
        
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Connection Closed")
    }
}


async function connectSetupDataAndGetDB() {
    //TBD
}
async function readDataWithQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readDataWithOperatorsAndCompoundQueries() {
    try {
        const db = await connectSetupDataAndGetDB();

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
async function updateData() {
    try {
        const db = await connectSetupDataAndGetDB();
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }

}
async function deleteData() {
    try {
        const db = await connectSetupDataAndGetDB();
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
insertAndReadData();
// readDataWithQueries();
// readDataWithOperatorsAndCompoundQueries();
// updateData()
// deleteData()
