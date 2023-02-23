import MainHeader from './MainHeader'

function Layout({ children }) {
  return (
    <>
    <MainHeader/>
      {children}
    </>
  );
}

export default Layout;
