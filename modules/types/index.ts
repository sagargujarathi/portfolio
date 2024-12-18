export interface IParamsType {
  user: string;
}

export interface IProjectType {
  name: string;
  description: string;
  image: string;
  links: {
    value: string;
    link: string;
  }[];
  technologies: string[];
}

export interface IBasicDetailsType {
  firstName: string;
  lastName: string;
  image: string;
}

export interface IAboutMeType {
  title: string;
  description: string;
  profession: string[];
  fields: string[];
  tools: string[];
  technologies: string[];
  languages: string[];
}

export interface IContactType {
  value: string;
  link: string;
}

export interface IUserType {
  username: string;
  basicDetails: IBasicDetailsType;
  aboutMe: IAboutMeType;
  contact: IContactType[];
  projects: IProjectType[];
}
