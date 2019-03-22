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