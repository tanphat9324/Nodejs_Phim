const User = require('../../models/user');

module.exports = {
  getUserHandle: (bodyFilter) => {
    const bodyException = {
      password: false,
      id: false,
      __v: false,
      __id: false
    };
    return new Promise((resolve, reject) => {
      User.find(bodyFilter,bodyException).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  creteUser: (bodyUser) => {
    return new Promise((resolve, reject) => {
      User.create(bodyUser).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  deleteUser: (email) => {
    return new Promise((resolve, reject) => {
      User.findOneAndDelete({
        email: email
      }).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  checkUser: (bodyFilter) => {
    return new Promise((resolve, reject) => {
      User.findOne(bodyFilter).then((data) => {
        resolve(data);
      }).catch((err) => {
      reject(err);
      });
    });
  },
  updateUser: (bodyFilter, bodyUpdate) => {
    return new Promise((resolve, reject) => {
      User.findOneAndUpdate(bodyFilter, bodyUpdate)
      .then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  getRoleUserFromToken: (token) => {
    return new Promise((resolve, reject) => {
      User.findOne({ token: token}).
      then((data) => {
        if(data !== null){
          resolve(data.role);
        }else {
          resolve(0);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  }
};
