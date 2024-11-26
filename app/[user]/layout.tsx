import userModel from "@/modules/utils/models/user-modal";
import { ReactNode } from "react";

interface ILayoutType {
  children: ReactNode;
  params: Promise<{ user: string }>;
}

// const UserContext = createContext(null);

const Layout = async ({ children, params }: ILayoutType) => {
  const user = (await params).user;
  const data = await userModel.findOne({ username: user });
  console.log(data);

  return <>{children}</>;
};

export default Layout;
