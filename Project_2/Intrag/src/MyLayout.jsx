import { Navbar } from "./page/Navbar";

function MyLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* footer */}
    </>
  );
}

export default MyLayout;
