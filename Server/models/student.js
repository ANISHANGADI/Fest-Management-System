import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userUsndb: String,
    userNamedb: String,
    userEmaildb: String,
    userSemesterdb: String,
    userSectiondb: String,
    eventRegistereddb: [String],
  },
  {
    timestamps: true,
  }
);

export const StudentDb =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
