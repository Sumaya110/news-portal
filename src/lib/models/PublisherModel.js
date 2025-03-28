import { Schema, model, models } from "mongoose";

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tags: [String],
});

const Publisher = models?.Publisher || model("Publisher", publisherSchema);

export default Publisher;
