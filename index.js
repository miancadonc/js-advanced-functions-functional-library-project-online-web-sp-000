const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (Array.isArray(collection)) ? collection.slice(0) : Object.values(collection)
      for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = (Array.isArray(collection)) ? collection.slice(0) : Object.values(collection)
      for(let i = 0; i < newCollection.length; i++){
        newCollection[i] = callback(newCollection[i])
      }
      return newCollection
    },

    reduce: function(collection=[], callback, acc=0) {
      let newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
      }
      for(let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
      }
      return acc
    },

    find: function(collection, predicate){
      let newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])){
          return newCollection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate){
      let newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      let returnArray = []
      for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])){
          returnArray.push(newCollection[i])
        }
      }
      return returnArray
    },

    size: function(collection){
      let newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      return newCollection.length
    },

    first: function(array, upTo=0){
      if(upTo === 0){
        return array[0]
      } else {
        return array.slice(0, upTo)
      }
    },

    last: function(array, from=0){
      if(from === 0){
        return array[array.length-1]
      } else {
        return array.slice(array.length-from, array.length)
      }
    },

    compact: function(array){
      return fi.filter(array, elem => !!elem)
    },

    sortBy: function(array, callback){
      let newArray = [...array]
      return newArray.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },

    // flatten: function(array, shallow=false){
    //   let newArray = []
      // let nextUp = []

      // for(let i = 0; i < array.length; i++){
      //   Array.isArray(array[i]) ? nextUp.push(array[i]) : newArray.push(array[i])
      // }

      // while(!!nextUp[0]){
      //   for(let i = 0; i < nextUp.length; i++){
      //     Array.isArray(nextUp[i]) ? nextUp.push(array[i]) : newArray.push(array[i])
      //   }
      //   for(let i = 0; i < nextUp.length; i++){
      //     if(shallow === false){
            
      //     } else {
      //       Array.isArray(array[i]) ? nextUp.push(array[i]) : newArray.push(array[i])
      //     }
      //   }
      // }



      
    // },

    // reference:
    // unpack: function(receiver, arr) {
    //   for (let val of arr)
    //     receiver.push(val)
    // },

    // flatten: function(collection, shallow, newArr=[]) {
    //   if (!Array.isArray(collection)) return newArr.push(collection)
    //   if (shallow) {
    //     for (let val of collection)
    //       Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    //   } else {
    //     for (let val of collection) {
    //       this.flatten(val, false, newArr)
    //     }
    //   }
    //   return newArr
    // },

    uniq: function(array, isSorted=false, callback){
      let oldArray

      if(callback){
        array.forEach(e => {
          let modVal = callback(e)
          oldArray.push(modVal)
        })
      } else {
        oldArray = array
      }

      let newArray = []
      for(let elem of oldArray){
        if(!newArray.includes(elem)){
          newArray.push(elem)
        }
      }
      return newArray
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
