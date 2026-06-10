import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({

  studentName: String,

  parentName: String,

  phone: String,

  country: String,

  age: String,

  course: String,

  notes: String,

  status: {
    type: String,
    default: "Pending",
  },
  submittedAt: {
  type: Date,
  default: Date.now,
},

}, {
  timestamps: true,
});

export default mongoose.models.Admission ||
mongoose.model("Admission", AdmissionSchema);