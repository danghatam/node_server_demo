import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SALT_ROUNDS = 12;

conse userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) => {
  const user = this;
  bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.validPassword = function(pwd) {
  return new Promise( (resolve, reject) => {
    bcrypt.compare(pwd, this.password, (err, result) => {
      if(err) reject(err);
      result(res);
    });
  })
}

export default mongoose.model('User', userSchema);
