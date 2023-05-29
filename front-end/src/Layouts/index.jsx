import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div style={{minHeight: "calc(100vh - 150px)"}}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;