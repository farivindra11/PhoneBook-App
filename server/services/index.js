const firebase = require("firebase");

const getUsers = () => {
  const userReference = firebase.database().ref("/Users/");
  return (new Promise((resolve, reject)=>{
    userReference.on("value", function(snapshot) {
      const folders = snapshot.val();
      if (folders === null) {
        resolve([]);
      }else{
        const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]));
        resolve(data);
      }
      userReference.off("value");
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

module.exports = {getUsers, createUser, updateUser, deleteUser}