import Consultation from "../component/Consultation";
import Hero from "../component/Hero";
import Layout from "../component/Layout";
import Trusted from "../component/Trusted";
import TechHero from "./component/TechHero";


function Index() {
    return (
        <Layout>
<TechHero />
           
            <Consultation />
            <Trusted />
        </Layout>
    );
}

export default Index;