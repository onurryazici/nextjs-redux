import React from "react";
import Header from "./header";
import Footer from "./footer";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";           
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';       
import { ReduxProvider } from "../redux/provider";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main className="my-9 mx-12"><ReduxProvider>{children}</ReduxProvider></main>
      <Footer />
    </div>
  );
};

export default Layout;
