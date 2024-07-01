const express = require('express');
const cors = require('cors');
const app = express();

/**************** 
***DB connection**
*****************/

/*
const { Datastore } = require('@google-cloud/datastore');
const fs = require('fs');

// Load the service account key file
const keyFilename = '../[filename].json';
const credentials = JSON.parse(fs.readFileSync(keyFilename, 'utf-8'));

// Create a client instance with explicit credentials
const datastore = new Datastore({
    projectId: 'project-id',
    keyFilename: keyFilename,
});
*/

const { Datastore } = require('@google-cloud/datastore');
const { GoogleAuth } = require('google-auth-library');

// Load project ID from environment variable
const projectId = process.env.PROJECT_ID;

const credentials = await GoogleAuth.getClient({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const datastore = new Datastore({
    projectId,
    credentials,
});




app.use(cors());

/**************** 
***Helper functions**
*****************/

////get task (vistorCount);
async function getVistorCountTask() {
    const taskKey = datastore.key(['Task', 5634161670881280]);
    const task = await datastore.get(taskKey);
    return task;
}

/**************** 
***Route functions**
*****************/

//Send current vistor count
const getVistorCount = async (req, res) => {

    //get task (vistorCount)
    const task = await getVistorCountTask();

    //response
    res.status(200).json({
        status: 200,
        data: task[0]
    });
}

//Update vistor count by incrementing by 1
const updateVistorCount = async (req, res) => {
    const task = await getVistorCountTask();
    const newCount = ++task[0].vistorCount;

    //update task(vistorCount) by 1
    task.vistorCount = newCount;

    //save task to finalize update
    const update = await datastore.save(task);

    //reponse
    res.status(200).json({
        status: 200,
        data: {
            vistorCount: newCount
        }
    });


}

/**************** 
***Routes**
*****************/
app.route('/api/v1/vistorcount').get(getVistorCount).put(updateVistorCount);

app.listen(3000, () => {
    console.log('listening on port 3000')
})