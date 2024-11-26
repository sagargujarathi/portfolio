import { randomUUID } from "crypto";
import mongoose from "mongoose";

const model = new mongoose.Schema({
  id: { type: String, required: true, default: randomUUID() }, // UUIDs are strings
  username: { type: String, required: true },

  basicDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String, required: true },
  },

  aboutMe: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    profession: { type: [String], required: true },
    fields: { type: [String], required: true },
    tools: { type: [String], required: true },
    technologies: { type: [String], required: true },
    languages: { type: [String], required: true },
  },

  contact: [
    {
      value: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],

  projects: [
    {
      id: { type: String, required: true, default: randomUUID },
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      links: [
        {
          value: { type: String, required: true },
          link: { type: String, required: true },
        },
      ],
      technologies: {
        type: [String],
        required: true,
      },
    },
  ],
});

const userModel = mongoose.models.user || mongoose.model("user", model);

export default userModel;
