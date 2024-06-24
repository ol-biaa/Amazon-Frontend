import Header from "../Header/Header"

function Layout({children}) {
  return (
    <>
    <Header/>
   {/* <br />  <br />  <br />  <br /> */}
    {children}
    </>
  )
}

export default Layout