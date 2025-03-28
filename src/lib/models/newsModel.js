import { Schema, model, models } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      default: Date.now
    },
    publisherId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const News = models?.News || model("News", newsSchema);
export default News;
