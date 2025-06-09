import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";
const CommonLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet/>
      </main>
    </div>
  )
};
export default CommonLayout;