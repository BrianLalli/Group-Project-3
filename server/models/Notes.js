const { Schema, model } = require('mongoose');

const NoteSchema = new Schema(
  {
    // owner: userId, 
    title: {
      type: String, 
      required: true, 
      
    }, 
    content: {
      type: String, 
      required: true,
       
    },
    date: {
      type: Date, 
      default: Date.now
    },
    
    // user: [
    //   {
    //   type: Mongoose.Schema.Types.UserId, 
    //   ref: 'User'
    //   }
    // ]
  }
);

const Notes = model('Notes', NoteSchema);

module.exports = Notes; 