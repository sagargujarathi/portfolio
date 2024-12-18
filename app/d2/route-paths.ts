export const DESIGN_ROUTE = "/d2";

export const ROUTER_LINKS = {
  HOME: DESIGN_ROUTE + "/{user}",
  ABOUT: DESIGN_ROUTE + "/{user}" + "/about",
  WORK: DESIGN_ROUTE + "/{user}" + "/work",
  CONTACT: DESIGN_ROUTE + "/{user}" + "/contact",
} as const;
