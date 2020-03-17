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
