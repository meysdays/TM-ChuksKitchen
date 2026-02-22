// import React from 'react'

import { footerSections } from "../config/footer";
import logo from "../assets/images/logochuks.png";

const Footer = () => {
  return (
    <div className="bg-[#64411d] text-white py-16">
      <div className="w-9/10 mx-auto">
        <div className="flex flex-row mb-8">
          <div className="w-1/7">
          <img src={logo} alt="" />
            <p className="text-[18px] leading-8 font-medium tracking-wide">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 w-4/6 mx-auto justify-between">
            {footerSections.map((section) => (
              <div key={section.title} className="w-1/2 md:w-1/4">
                <h3 className="font-bold mb-4">{section.title}</h3>

                <ul className="space-y-2 font-light">
                  {section.children.map((item) => (
                    <li key={item.name}>
                      {item.path ? (
                        <a href={item.path} className="hover:text-orange-500">
                          {item.name}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <p>© 2020 Lift Media. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
