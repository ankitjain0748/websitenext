import Consultation from "../component/Consultation";
import Hero from "../component/Hero";
import Layout from "../component/Layout";
import Trusted from "../component/Trusted";
import Services from "./Services";

function Index() {
    return (<>
        <Layout
        >
            <Hero
                subtitle={"Systems that perform. Solutions that last."}
                title={"Professional Digital Engineering Services"}
                content={"Joynstack provides structured engineering services designed to deliver reliable and scalable digital systems. Our services are focused on building long-term technology solutions rather than short-term implementations. "}
                subcontent={"We work closely with businesses to understand operational workflows and translate them into efficient digital platforms that improve productivity and support growth."}
  subcontent2={"Our service areas include software engineering, mobile applications, artificial intelligence systems, commerce platforms, enterprise automation, and creative digital production."}
            />

            <Services />
            <Consultation />
            <Trusted />
        </Layout>
    </>);
}

export default Index;