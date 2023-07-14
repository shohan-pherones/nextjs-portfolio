import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="wrapper section-padding">
      <SectionTitle title="Get In Touch" subtitle="Contact" />
      {/* CONTENTS */}
      <div className="grid grid-cols-2 gap-10">
        {/* CONTACTS */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold max-w-lg">{`Let's unlock together the next level of possibilities! Reach out.`}</h3>
          <div>
            <h3 className="text-2xl font-semibold text-dark/50">
              Social Media
            </h3>
            <div className="flex gap-5">
              <Link
                href="https://github.com/shohan-pherones"
                target="_blank"
                className="link-item-dark"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/shohan-pherones"
                target="_blank"
                className="link-item-dark"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/elysianshohan"
                target="_blank"
                className="link-item-dark"
              >
                Twitter
              </Link>
              <Link
                href="https://www.facebook.com/spectra.shohan"
                target="_blank"
                className="link-item-dark"
              >
                Facebook
              </Link>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <h3 className="text-2xl font-semibold text-dark/50">
                Hello, my mail awaits!
              </h3>
              <Link
                href="mailto:shohan.sub.56@gmail.com"
                target="_blank"
                className="link-item-dark"
              >
                shohan.sub.56@gmail.com
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-dark/50">Address</h3>
              <Link
                href="https://goo.gl/maps/WFSWfFP4WdQNxthCA"
                target="_blank"
                className="link-item-dark"
              >
                Sirajganj, Bangladesh
              </Link>
            </div>
          </div>
        </div>
        {/* FORM */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
