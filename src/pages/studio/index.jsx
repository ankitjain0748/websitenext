import React from "react";
import Services from "./studio";
import Hero from "../component/Hero";
import Layout from "../component/Layout";

const Index = () => {
    return (
        <>
           <Layout>
            <Hero/>
            <Services/>
           </Layout>
        </>
    );
};

export default Index;