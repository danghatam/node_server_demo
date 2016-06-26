import jwt from 'jsonwebtoken';
import User from '../models/user';

class UserService {
  //list all users
  list(){
    return new Promise((resolve, reject) => {
      User.find({}).exec( (err, result) => {
        if(err) reject(err);
        resolve(result);
      })
    });
  }

  //get user by id
  get(id) {
    return new Promise((resolve, reject) => {
      User.findOne({_id: id}).exec((err, result) => {
        if(err) reject(err);
        resolve(result);
      })
    })
  }

  //add new user
  add(params) {
    return new Promise((resolve, reject) => {
    	c
      const input = {
        username: params.username,
        password: params.password
      };
      new User.save(input, { new: true, safe: true}, (err, result) => {
        if(err) reject(err);
        resolve(result);
      });
    })
  }

  //update user
  edit(id, params) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(id, {$set: params}, {new: true}, (err, result) => {
        if(err) reject(err);
        resolve(result);
      })
    })
  }

  //delete user
  remove(id) {
    return new Promise((resolve, reject) => {
      User.remove({_id: id}, (err, result) => {
        if(err) reject(err);
        resolve(result);
      })
    })
  }

  //user log in
  login(params) {
    return new Promise((resolve, reject) => {
      User.findOne({username: params.username}).exec((err, user) => {
        if(err) return reject(err);
        if(!user) return reject(new Error("User not found."));
        user.validPassword(params.password).then( rs => {
          if(rs) resolve(rs);
          else reject( new Error("Unauthorized."));
        });
      })
    })
  }

}

export default UserService;
