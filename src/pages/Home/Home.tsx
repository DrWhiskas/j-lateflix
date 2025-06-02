import React from "react";
import './Home.css';

/* import components */
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

export default function Home() {
    return(
        <div className="home">
            <Navbar />
            <Footer />
        </div>
    )

}
