import MenuBar from "../atoms/MenuBar";

const Layout = ({children}) => {
  return (
    <div className="pt-14 bg-slate-200 min-h-screen">
      <MenuBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
