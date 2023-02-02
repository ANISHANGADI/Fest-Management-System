import mongoose from "mongoose";

const winnerSchema = new mongoose.Schema(
  {
    event: String,
    winnerList: {
      firstWinnerUsn: String,
      firstWinnerName: String,
      firstWinnerSem: String,
      firstWinnerSec: String,
      secondWinnerUsn: String,
      secondWinnerName: String,
      secondWinnerSem: String,
      secondWinnerSec: String,
      thirdWinnerUsn: String,
      thirdWinnerName: String,
      thirdWinnerSem: String,
      thirdWinnerSec: String,
    },
  },
  {
    timestamps: true,
  }
);

export const WinnerDb =
  mongoose.models.Winner || mongoose.model("Winner", winnerSchema);
