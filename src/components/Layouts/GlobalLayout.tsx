import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <div>
      GlobalLayout <Outlet />
    </div>
  );
};

export { GlobalLayout };
