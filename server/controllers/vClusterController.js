const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const vClusterController = {};

// adds a vcluster to the database - may need to edit some of the query
vClusterController.addVCluster = (req, res, next) => {
  const { vClusterName } = req.body;
  const params = [vClusterName];
  const query = `
  INSERT INTO vclusters(name)
  VALUES ($1)`
  db.query(query, params)
    .then(() =>  next())
    .catch((err) => {
      return next({ log: `Error in clusterController.addVCluster: ${err}` });
    })
}

// clusterController.deleteClusterFromDB = (req, res, next) => {
//   const { hostNamespace, vClusterName, projectName } = req.body;
//   const params = [hostNamespace, vClusterName, projectName];
//   const query = `
//   INSERT INTO vclusters3(team_id, namespace_id, project)
//   VALUES ($1, $2, $3)`

//   db.query(query, params)
//     .then(() => {
//       return next();
//     })
//     .catch((err) => {
//       return next({ log: `Error in clusterController.addCluster: ${err}` });
//     })
// }

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

vClusterController.fetchVClusters = (req, res, next) => {
  const query = `SELECT * FROM vclusters;`
  db.query(query)
    .then((data) => {
      res.locals.kyung = data.rows
      return next();
    })
}

vClusterController.fetchNamespaces = (req, res, next) => {
  const query = `
  SELECT name FROM namespaces;
  `
  db.query(query)
    .then((data) => {
      res.locals.clusternamespaces = data.rows
      return next();
    })
}

vClusterController.fetchClusters = (req, res, next) => {
  const query = `
  SELECT name FROM clusters;
  `
  db.query(query)
    .then((data) => {
      res.locals.clusterclusters = data.rows
      return next();
    })
}


module.exports = vClusterController;