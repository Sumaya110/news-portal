import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  bookmarks: [
    {
      publisherId: String,
      publisherName: String,
    },
  ],
});

const Users = models?.Users || model("Users", userSchema);
export default Users;
