```"Ohana is a full-stack management tool that abstracts self-service K8s workflow for engineering/DevOps teams by giving developers the freedom to create namespace/virtual clusters on-demand achieving strong multi-tenancy in a cluster through RBAC."```

After forking and cloning the repository here, open a terminal within the cloned directory on your local filesystem. Run the following command to install the necessary dependencies: ```npm install```

When the dependencies are finished installing, run the following to concurrently bundle the application's assets and start the Express server in a development environment:

Ensure helm has been installed. You can do so with these commands: ```helm version``` to check your version. Please reference [helm](https://helm.sh/docs/intro/install/) for further instructions based on your OS

Ensure vCluster has been installed: ```vcluster -v``` to check your version. Please reference the following to download for your respective OS or visit [vCluster](https://www.vcluster.com/):

To run the application, execute npm run dev

After the application finishes compiling, you should be served the Ohana user interface on localhost:8080, with the server listening on localhost:3000. You should see a login screen rendered to your browser.

TO GET STARTED:
- Run ```npm install``` , we need to do this because our npm dependencies 
- Run ```ohana-*** with the "nix", "mac", "win", "m1" ``` flags depending on your operating system or command line interface
- Please note that if you are using WSL and Windows, please install using the ```ohana-nix``` flag; if you are using powershell, please install using the ```ohana-win``` flag
- Google cloud may need to be installed locally for macOS: ```https://cloud.google.com/sdk/docs/quickstart#mac```

FOR ADMINS TO CONNECT:
- utilize gcloud init to set up a configuration; regions are currently locked to ```us-west1``` or ```us-west1-a```. functionality to choose or create will come in a later update; 
- Run ```gcloud config set account <account-email-address>``` to change accounts if managing more than one cluster; functionality in UI to be included later
- Connect to the cluster with your google cloud account using ```gcloud auth login```; you may be asked to verify in a browser

FOR ADMINS TO MANAGE TEAMS:
- Use an admin account and log in with your credentials. You will be taken to the admin panel where you can create teams, users, and have a view of the existing teams and users
- Create users within the UI; functionality to use a .yaml configuration for RBAC configuration
- Once users have their own account, they'll be able to log in

FOR USERS:
- Once you have your account and can log in, the UI is intuitive to connect and create
- Input the necessary fields in the vCluster page: 
- ```Cluster``` : Original Cluster name to connect to
- ```vCluster```: the vCluster name you want
- ```Host Namespace```: 

 - Assumes you already have a cluster that is currently running on GKE
 - Assumes you have admin privileges for said cluster (Admin)
  -- the Admin would then grant you rights to the namespace, which would allow you to create a vcluster
***
This project is open-source and licensed under Apache 2.0, so you can use it in any private or commercial projects.