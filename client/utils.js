export const fetchCookieData = async (url, hook1, hook2) => {
  let response = await fetch(url)
  response = response.json();
  hook1(response.isLoggedIn)
  hook2(response.isAdmin)
}

export const fetchClusterList = async (url, hook) => {
  let response = await fetch(url)
  response = response.json();
  let names = [];
  response.forEach((element) => names.push(element.name))
  hook(names);
}