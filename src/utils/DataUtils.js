export const getProperties = object => Object.keys(object);

const fieldsPerSubjectMap = new Map()
  .set("people", ["name", "gender", "mass", "birth_year"])
  .set("planets", ["name", "population", "terrain", "diameter"])
  .set("films", ["title", "episode_id", "director", "producer"])
  .set("starships", ["name", "model", "manufacturer", "crew"])
  .set("vehicles", ["name", "model", "manufacturer", "crew"])
  .set("species", ["name", "language", "average_lifespan", "average_height"])

const pick = (obj, keys) =>
  keys.map(k => k in obj ? { [k]: obj[k] } : {})
    .reduce((res, o) => Object.assign(res, o), {});

const mapResult = (subject, input) => {
  const fieldsOfSubject = fieldsPerSubjectMap.get(subject);
  return input.map(entry => pick(entry, fieldsOfSubject))
}

/**
 * Get data from Star Wars Api
 * @param {string} urlPart - string after the base url
 */
export const getStarWarsData = (subject, searchTerm, onSuccess, onError) =>
  fetch(`https://swapi.co/api/${subject}/?search=${searchTerm}`)
    .then(res => res.json())
    .then(
      result => onSuccess(mapResult(subject, result)),
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