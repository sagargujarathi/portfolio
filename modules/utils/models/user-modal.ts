import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
});

const schema = new mongoose.Schema({
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

  projects: [projectSchema],
});

const userSchema = mongoose.models.user || mongoose.model("user", schema);

export default userSchema;
