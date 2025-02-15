import mongoose, { model, Schema, Types } from "mongoose";
import { IChallenge } from "./challenge.interface";


const challengeSchema = new Schema(
  {
    challengeId: {
        type: String,
        unique: true,
        default: () => new Types.ObjectId().toString(),
      },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
    },
    startedAt: {
      type: Date,
      default: null,
    },
    image: {
      type: String,
    },
    completedAt: {
      type: Date,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isLoop: {
      type: Boolean,
      default: false,
    },
    resettable: {
      type: Boolean,
      default: false,
    },
    reminderTime: {
      type: String,
    },
    category: {
      type: String,
    },
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      requre:true
    },
    visibility: {
      type: String,
      enum: ["FREE", "PRO"],
      required: true,
    },
    streak: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: String,
    },
    updatedBy: {
      type: String,
    },
  },
  { timestamps: true }
);



const Challenge = model<IChallenge>("Challenge", challengeSchema);

export default Challenge;
