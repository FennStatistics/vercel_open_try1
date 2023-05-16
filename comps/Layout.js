import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
 // children of layout component
export default Layout;