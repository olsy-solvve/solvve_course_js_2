import mongoose from "mongoose";

const UserStat = new mongoose.Schema({
    // name: { type: String, required: true, unicode: true },
    wins: {type: String},
    loses: {type: String},
});

const StatisticsModel = mongoose.model("Statistics", UserStat);

export default StatisticsModel;
