import React, { useContext, useEffect } from "react";
import TeamsDisplay from "./TeamsDisplay.jsx";
import CreateTeam from "./CreateTeam.jsx";
import CreateUser from "./CreateUser.jsx";
import { AppContext } from "./AppContext.js";
import { fetchCookieData, fetchClusterList } from "../utils";

const AdminPage = async () => {
  const { setIsLoggedIn, setIsAdmin, setClusterNames } = useContext(AppContext);

  // need to put this in an env variable
  const cookiePath = "/cookies"
  const clusterList = "/clusters/list"

  useEffect(() => {
    fetchCookieData(cookiePath, setIsLoggedIn, setIsAdmin)
    fetchClusterList(clusterList, setClusterNames)
  },[])

  return (
    <div id="adminpage">
      <CreateTeam />
      <TeamsDisplay />
      <CreateUser />
    </div>
  );
};

export default AdminPage;
