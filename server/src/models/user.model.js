const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed
  role: {
    type: String,
    enum: ["participant", "organizer", "admin"],
    default: "participant",
  },
  college: { type: String, required: true },

  // References to role-specific details
  participantDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant",
  },
  organizerDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Organizer" },
  adminDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);



  