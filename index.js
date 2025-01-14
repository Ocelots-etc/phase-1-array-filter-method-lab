function findMatching(drivers, string) {
  const newArray = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return newArray

}

function fuzzyMatch(drivers, searchTerms){
  //** arguements are an array of drivers' names and a string  */
  //** returns all drivers whoe names begin with the provided letters */
  const newDriversArray = drivers.filter(driver => driver.startsWith(searchTerms))
  return newDriversArray

}

function matchName(drivers, searchTerms){
  //** arguments are an array of driver objects and a string as arguments */
  //** driver object properties: name and hometown */
  //** returns element if name property matches string argument */
  const newDriversArray = drivers.filter(driver => driver.name === searchTerms)
  return newDriversArray
}

