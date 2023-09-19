// localStorageUtil.js

// Function to get data from local storage by key
export function getFromLocalStorage(key:string) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error getting data from local storage:', error);
    return null;
  }
}

// Function to set data in local storage by key
export function setInLocalStorage(key:string, data:any) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error setting data in local storage:', error);
  }
}

// Function to remove data from local storage by key
export function removeFromLocalStorage(key:string) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from local storage:', error);
  }
}

export function toggleObjectInListLocalStorage(key:string, objToToggle:any) {
 
  const existingList = getFromLocalStorage(key) || [];

  // Check if the number is in the list
  const objIndex = existingList.indexOf(objToToggle);

  if (objIndex !== -1) {
    // If the number is in the list, remove it
    existingList.splice(objIndex, 1);
  } else {
    // If the number is not in the list, add it
    existingList.push(objToToggle);
  }

  // Save the updated list back to local storage
  setInLocalStorage(key, existingList);
}




// export function addObjectToListLocalStorage(key:string, objectToAdd:any) {
//   // Retrieve the existing list from local storage or initialize it as an empty array
//   const existingList = getFromLocalStorage(key) || [];

//   // Add the new object to the list
//   existingList.push(objectToAdd);

//   // Save the updated list back to local storage
//   setInLocalStorage(key, existingList);
// }

// export function removeObjectFromListLocalStorage(key:string, objectIdToDelete:any) {
//   // Retrieve the existing list from local storage or initialize it as an empty array
//   const existingList = getFromLocalStorage(key) || [];

//   // Find the index of the object to delete
//   const indexToDelete = existingList.findIndex(
//     (item:any) => item.id === objectIdToDelete
//   );

//   // If the object exists in the list, remove it
//   if (indexToDelete !== -1) {
//     existingList.splice(indexToDelete, 1);

//     // Save the updated list back to local storage
//     setInLocalStorage(key, existingList);
//   }
// }
