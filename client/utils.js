export const fetchCookieData = async (url, hook1, hook2) => {
  try {
    let response = await fetch(url)
    response = response.json();
    hook1(response.isLoggedIn)
    hook2(response.isAdmin)
  }
  catch(err) {
    console.log(err)
  }
}

export const fetchClusterList = async (url, hook) => {
  try {
    let response = await fetch(url)
    response = response.json();
    let names = [];
    response.forEach((element) => names.push(element.name))
    hook(names);
  }
  catch(err) {
    console.log(err)
  }
}