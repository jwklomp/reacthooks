/**
 * Get data from Star Wars Api
 * @param {string} urlPart - string after the base url
 */
export const getStarWarsData = (subject, searchTerm, onSuccess, onError) =>
    fetch(`https://swapi.co/api/${subject}/?search=${searchTerm}`)
        .then(res => res.json())
        .then(
            result => onSuccess(result),
            error => onError(error)
        );

export const subjects = [
  {
    key: "films",
    value: "Movies"
  },
  {
    key: "people",
    value: "People"
  },
  {
    key: "planets",
    value: "Planets"
  },
  {
    key: "species",
    value: "Species"
  },
  {
    key: "starships",
    value: "Starships"
  },
  {
    key: "vehicles",
    value: "Vehicles"
  }    
]        