import Consultation from "../component/Consultation";
import Hero from "../component/Hero";
import Layout from "../component/Layout";
import Trusted from "../component/Trusted";

function Index() {
    return (
        <Layout>

            <Hero />
            <Consultation />
            <Trusted />
        </Layout>
    );
}

export default Index;