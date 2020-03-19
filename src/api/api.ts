import { Strat } from "@/api/types";

export function LoadRandomStrat(site: string, mode: string): Promise<Strat> {
  return new Promise<Strat>(function(resolve, reject) {
    const querySite = encodeURIComponent(site);
    const queryMode = encodeURIComponent(mode);

    const route = `https://strat-roulette.lol3r.net/api/strat/random?site=${querySite}&mode=${queryMode}`;
    fetch(route)
      .then(response => {
        return response.json();
      })
      .then(body => {
        resolve(body);
      })
      .catch(reject);
  });
}

export function LoadSingleStrat(id: string): Promise<Strat> {
  return new Promise<Strat>(function(resolve, reject) {
    const queryID = encodeURIComponent(id);

    const route = `https://strat-roulette.lol3r.net/api/strat/single?id=${queryID}`;
    fetch(route)
      .then(response => {
        return response.json();
      })
      .then(body => {
        resolve(body);
      })
      .catch(reject);
  });
}

export function AddStrat(
  name: string,
  description: string,
  modes: string[],
  site: string
): Promise<void> {
  return new Promise<void>(function(resolve, reject) {
    const reqBody = {
      name: name,
      description: description,
      site: site,
      modes: modes
    };

    const reqBodyString = JSON.stringify(reqBody);

    fetch("https://strat-roulette.lol3r.net/api/admin/strat/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: reqBodyString
    })
      .then(response => {
        console.log(response);
      })
      .catch(reject);
  });
}

export function login(username: string, password: string): Promise<void> {
  return new Promise<void>(function(resolve, reject) {
    const reqBody = {
      username: username,
      password: password
    };

    const reqBodyString = JSON.stringify(reqBody);

    fetch("https://strat-roulette.lol3r.net/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: reqBodyString
    })
      .then(response => {
        const responseCode = response.status;

        if (responseCode != 200) {
          reject(`Returned non 200 Status-Code: ${responseCode}`);
        }

        resolve();
      })
      .catch(reject);
  });
}
