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
  const clustList = "/clusters/list"

  useEffect(() => {
    fetchCookiesData(cookiePath, [setIsLoggedIn, setIsAdmin] )
    const fetchCookieData = async () => {
      let response = await fetch("/cookies")
      response = response.json();
      setIsLoggedIn(response.isLoggedIn)
      setIsAdmin(response.isAdmin)
    }
    fetchCookieData()
    const fetchClusterList = async () => {
      let response = await fetch("/clusters/list")
      response = response.json();
      let names = [];
      response.forEach((element) => names.push(element.name))
      setClusterNames(names);
    }
    fetchClusterList();
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
