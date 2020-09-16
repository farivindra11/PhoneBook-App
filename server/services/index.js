const firebase = require("firebase");

const getUsers = (offset, limit) => {

  const userReference = firebase.database().ref("/Users/");

  return (new Promise((resolve, reject)=>{
    userReference.on("value", function(snapshot) {
      const folders = snapshot.val();

      if (folders === null) {
        resolve([]);
      }else{
        const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]));
        const result = data.length;
        const list = data.splice(offset, limit);

        resolve({result, list});
      }
      userReference.off("value");
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
      reject("The read failed: " + errorObject.code);
    });
  }));
}

// search 
const searchUsers = (name, phone, offset, limit) => {

  const regName = new RegExp(name, 'ig')
  const regPhone = new RegExp(phone, 'g')
  const phoneReference = firebase.database().ref("/Users/");

  return (new Promise((resolve, reject) => {

    phoneReference.on("value", function (snapshot) {
      const folders = snapshot.val();

      if (folders === null) {
        resolve([]);
      } else {

        const rows = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o])).filter(item => {

          if (name && phone) {
            return item.Name.match(regName) && item.Phone.match(regPhone)
          }else if(name) {
            return item.Name.match(regName)
          }else if(phone) { 
            return item.Phone.match(regPhone)
          }else{
            
          return false
            
          } 
        })

        const dataLength = rows.length
        const listData = rows.splice(offset, limit)

        resolve({ listData, dataLength });
      }
      phoneReference.off("value");
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
      reject("The read failed: " + errorObject.code);
    });
  }));
}


//Create new instance
const createUser = (user) => {
  const referencePath = `/Users/${user.id}/`;
  const userReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    userReference.set({Name: user.Name, Phone: user.Phone}, (error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(user);
      }
    });
  }));
}

//Update existing instance
const updateUser = (user) => {
  var referencePath = `/Users/${user.id}/`;
  var userReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    userReference.update({Name: user.Name, Phone: user.Phone}, (error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(user);
      }
    });
  }));
}

//Delete an instance
const deleteUser = (user) => {
  var referencePath = `/Users/${user.id}/`;
  var userReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    userReference.remove((error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(user);
      }
    })
  }));
}

module.exports = {getUsers, createUser, updateUser, deleteUser, searchUsers}