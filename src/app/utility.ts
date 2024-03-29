export class Utility {
  /**
   * Handles the problems with circular references in JSON.
   * For details on this function, visit https://www.stilldrinking.org/programming-sucks and scroll down
   * to "All code is bad"
   * @param {Object|string} theJSON
   * @returns {Object}}
   */
  static restoreJsonNetReferences(theJSON: any) : any {
    if (typeof theJSON === "string") { theJSON = JSON.parse(theJSON); }

    // We declare these up here and have a nested function so that we can keep track of some global things while we recurse.
    const originals: any = {};
    const failures: Array<any> = [];

    /**
     * Fixes JSON objects that have the $id kind of circular references.
     * @param {Object} theObject
     * @param {Array} oldParents
     * @returns {Object}
     */
    function fixTheObject(theObject: any, oldParents: Array<any>): any {
      // Base Case: If it's primitive or an empty object, just return it.
      if (typeof theObject !== 'object' || !theObject) { return theObject; }

      // Create a new copy of the array we were passed. This is because it's (obviously) passed by reference, and we don't want to modify the
      // Parents array of the previous level, as we may be iterating over an array somewhere down the recursion chain, and don't want one array
      // item's parents to affect another.
      const theParents = oldParents.slice();

      // If it is an array, it will be represented as an object with a "$values" property containing the array, and an "$id".
      // If it's an array...
      if (theObject.hasOwnProperty("$values")) {

        // ...create an array of corrected values, and use that.
        const newArray = [];

        // Add this object/array to the Parents before we iterate over its values.
        theParents.push(theObject["$id"]);

        for (let j in theObject["$values"]) {
          newArray.push(fixTheObject(theObject["$values"][j], theParents));
        }

        // If it's an array, it will have an $id. If it doesn't, the object isn't from JSON.net, and this code SHOULD break,
        // so I'm not checking for it. That's your job. :D
        // Store the array in the array of $id/object pairs in case we need it again.
        originals[theObject["$id"]] = newArray;

        return newArray;
      }

      // If we have "$id", then we're an original copy of an object. Remove that $id, iterate over the object and fix its
      // properties, then store it by its $id in our originals. This could be combined with the final case at the end of this
      // function, but it looks weird and feels wrong, soo nanny-nanny poo-poo, I'm not doing it.
      if ("$id" in theObject) {
        // Save the id before we delete it from the object so we can use it as a key in the originals array.
        const id = theObject['$id'];
        delete theObject["$id"];
        theParents.push(id);

        // Fix all the properties of the object recursively
        for (let k in theObject) {
          theObject[k] = fixTheObject(theObject[k], theParents);
        }

        // Store this object in the array of originals for use later
        originals[id] = theObject;

        return theObject;
      }

      // If it has a "$ref" property, we have to go get it from our array of stored objects.
      if ("$ref" in theObject) {
        // If this $ref exists in our Parents array, then we have a circular definition. Return a blank object to prevent an infinite loop.
        if (theParents.indexOf(theObject["$ref"]) != -1) { return {}; }

        // If not, and the $ref is in our originals array, return that.
        if (theObject["$ref"] in originals) {
          return originals[theObject["$ref"]];
        }

        // If we didn't hit the return statements above, that means this object hasn't be discovered yet. This shouldn't happen,
        // but we're good little programmers who protect against theoretically possible edge cases. So we store it to be fixed later.
        failures.push(theObject);
      }

      // If we get here, this object is untouched by JSON.net. Just to be sure, we'll check all its properties, but really we just
      // need to return the object.
      for (let i in theObject) {
        theObject[i] = fixTheObject(theObject[i], theParents);
      }
      return theObject;

    }

    // Now just go through our failures and fill them in.
    for (var i in failures) {
      failures[i] = originals[failures[i]["$ref"]];
    }

    return fixTheObject(theJSON, []);

  }
}
