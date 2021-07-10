const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const vClusterController = {};

// adds a vcluster to the database - may need to edit some of the query
vClusterController.addVCluster = (req, res, next) => {
  const { vClusterName } = req.body;
  const params = [vClusterName];
  const query = `INSERT INTO vclusters (name) VALUES ($1)`
  db.query(query, params)
    .then(() =>  next())
    .catch((err) => {
      return next({ log: `Error in clusterController.addVCluster: ${err}` });
    })
  }

// creates a vcluster within the connected GKE cluster
vClusterController.createVCluster = (req, res, next) => {
  const { clusterName, vClusterName, hostNamespace } = req.body;
  res.locals.vClusterName = vClusterName;
  runTerminalCommand(gcloud.getCredentials(clusterName))
    .then((data) => {
      runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
        .then(() => next())
        .catch(err => console.log(err))
    }).catch(err => next({ log: `clusterController.createCluster: ${err}` }))
  }

// selects vcluster list from database
vClusterController.fetchVClusters = (req, res, next) => {
  const query = `SELECT * FROM vclusters;`
  db.query(query)
    .then((data) => {
      res.locals.kyung = data.rows
      return next();
    })
  }
module.exports = vClusterController;