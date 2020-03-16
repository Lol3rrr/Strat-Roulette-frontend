import { Strat } from "@/api/types";

export function LoadRandomStrat(): Promise<Strat> {
  return new Promise<Strat>(function(resolve, reject) {
    const baseRoute = "https://strat-roulette.lol3r.net/api/strat/random?site=attacker&mode=bomb";
    fetch(baseRoute)
      .then(response => {
        return response.json();
      })
      .then(body => {
        console.log(body);

        resolve(body);
      })
      .catch(reject);
  });
}
