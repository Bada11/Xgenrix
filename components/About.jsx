import React from "react";
import Card from "./Card";

const about = [
  {
    id: 1,
    title: "Cultivate Originality",
    text: "Your imagination, our technology. Generate distinctive art with pre-trained AI models or train your own.",
  },
  {
    id: 2,
    title: "Simplified Mastery",
    text: "Easy to grasp, rewarding to perfect. Be proficient in producing exquisite content quickly and efficiently.",
  },
  {
    id: 3,
    title: "Turbocharge Innovation",
    text: "Fast-forward your ideation process. Conceptualise, iterate, and experiment at light speed.",
  },
];

const About = () => {
  return (
    <div className="mt-10 xl:flex justify-between gap-5 w-full sm:p-10 p-5">
      {about.map((list) => (
          <Card key={list.id} {...list} />
      ))}
    </div>
  );
};

export default About;
