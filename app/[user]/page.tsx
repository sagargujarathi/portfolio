import { redirect } from "next/navigation";
import { DESIGN_ROUTE } from "./design-1/route-paths";

interface IPageType {
  params: { user: string };
}

const UserPage = ({ params }: IPageType) => {
  console.log(params);

  redirect(DESIGN_ROUTE);
};

export default UserPage;
