import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" desc="Contact With Me" />
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
};

export default Contact;
