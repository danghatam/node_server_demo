import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

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

userSchema.methods.validPassword = function(pwd) {
  return new Promise( (resolve, reject) => {
    bcrypt.compare(pwd, this.password, (err, result) => {
      if(err) reject(err);
      result(res);
    });
  })
}

export default mongoose.model('User', userSchema);
