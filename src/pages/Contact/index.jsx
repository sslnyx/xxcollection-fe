import PageHero from "../../components/PageHero";
import heroBanner from "/img/banner/contact.jpg";
import Map from "./Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import SayHello from "./SayHello";
import { Helmet } from "react-helmet";

const Contact = () => {
  const title = {
    heading: "CONTACT <span class='text-gold'>US</span>",
    subline: "Your dream car is only one click away",
    pageTitle: "Contact Us",
  };

  const render = (status) => {
    return <h1>{Status.status}</h1>;
  };

  return (
    <div className="flex-1 flex flex-col">
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact XXCollection Club for inquiries about our luxury, exotic, and supercar services. We are here to assist you with all your automotive needs."
        />
        <link rel="canonical" href="https://xxcollectionclub.com/contact-us" />
      </Helmet>

      <PageHero {...{ heroBanner, title }} />

      <section>
        <div className="container">
          <div className="flex flex-row flex-wrap">
            <div className="basis-full md:basis-1/2">
              <Wrapper
                apiKey={import.meta.env.VITE_APP_MAP_KEY}
                render={render}
              >
                <Map />
              </Wrapper>
            </div>

            <div className="basis-full md:basis-1/2 md:p-[50px] flex justify-start items-center">
              <div className="max-w-[450px]">
                <h1 className="text-3xl">GET IN TOUCH</h1>
                <p>
                  If you find a vehicle that interests you, please contact us
                  directly and we will be more than happy to answer any
                  questions you may have!
                </p>
                <br />
                <h3>Hours:</h3>
                <p>
                  <span className="inline-block min-w-[180px]">
                    Monday - Saturday
                  </span>{" "}
                  10AM - 5PM
                  <br />
                  <span className="inline-block min-w-[180px]">
                    Sunday
                  </span>{" "}
                  close
                </p>
                <br />
                <h3>Address:</h3>
                <p>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Aimone+Auto+Group/@49.1880577,-123.1358127,21z/data=!4m5!3m4!1s0x548674d887f42763:0x35545b6fcdb46f70!8m2!3d49.1880767!4d-123.135718"
                  >
                    8000 River Rd, Richmond, BC V6X 1X7
                  </a>
                </p>
                <br />

                <p>
                  <span className="min-w-[70px] inline-block">Email: </span>
                  <a href="mailto:info@aimoneautogroup.com">
                    info@aimoneautogroup.com
                  </a>
                </p>
                <p>
                  <span className="min-w-[70px] inline-block">Phone: </span>
                  <a href="tel:604-370-7031">604-370-7031</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red">
        <div className="container">
          <SayHello />
        </div>
      </section>

      <section>
        <div className="container flex flex-col items-center justify-center">
          <h3 className="text-2xl mb-3 text-center">
            No pressure sales tactics
          </h3>
          <p className="max-w-[600px] text-center">
            We value our clients and want them to feel comfortable about their
            purchase. That's why we do not pressure them into buying or making
            decisions on the spot. We give them enough time to browse through
            our website at their own pace until they find what they're looking
            for while we wait patiently by the phone or email
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
