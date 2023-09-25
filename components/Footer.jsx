import React from "react";

const footer = [
  {
    id: 1,
    title: "About",
    list1: "FAQ",
    list2: "Contact us",
  },
  {
    id: 1,
    title: "Stay tuned",
    list1: "Facebook",
    list2: "Instagram",
    list3: "Discord",
  },
  {
    id: 1,
    title: "About",
    list1: "FAQ",
    list2: "Contact us",
  },
  {
    id: 1,
    title: "Stay tuned",
    list1: "Facebook",
    list2: "Instagram",
    list3: "Discord",
  },
];

const Footer = () => {
  return (
    <div className="sm:flex justify-between mt-20 gap-5 text-center ">
      <h1 className="text-[25px] pb-10 ">Xgenrix <span className="logo">ai.</span></h1>

      {footer.map((list) => (
        <div key={list.id} className="flex flex-col gap-5">
          <h1 className="text-[20px]">{list.title}</h1>
          <ul className="mt-3 flex flex-col gap-3">
            <li>{list.list1}</li>
            <li>{list.list2}</li>
            <li className="pb-10">{list.list3}</li>
          </ul>
        </div>
      ))}
    </div>
  )
};

export default Footer;
