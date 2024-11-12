const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, 'Please add a first name'],
    },
    lname: {
      type: String,
      required: [true, 'Please add a last name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone'],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('fullName').get(function(){
  return `${this.fname} : ${this.lname}`;
});



module.exports = mongoose.model('User', userSchema);