import { getWalkers } from "./database.js"

import { filterWalkerCitiesByWalker } from "./WalkerCities.js";

import { assignedCityNames } from "./WalkerCities.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
            
                    window.alert(`${walker.name} services the following cities: ${cities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
return walkerHTML
}