import React from "react";

const About = () => {
  const about = [
    {
      title: "Company",
      value: "OpenAi",
    },
    {
      title: "Website",
      value: "www.openai/chatgpt/",
    },
    {
      title: "Release Date",
      value: "September 2021",
    },
    {
      title: "Product Version",
      value: "ChatGPT v3.5.",
    },
    {
      title: "Integrations",
      value: "Slack, Discord, and Facebook Manager",
    },
    {
      title: "Pricing",
      value: "Freemium",
    },
  ];
  const related = [
    {
      title: "Industry",
      value: "Healthcare, Retail and e-commerce",
    },
    {
      title: "Use Case",
      value: "Risk Analysis",
    },
  ];
  return (
    <section className="pt-8 pb-12 flex  gap-x-10 ">
      <div className="basis-1/2">
        <h4 className="text-[#424141] font-bold text-xl">About Chatgpt </h4>
        <div className="space-y-4 pt-8 text-lg">
          {about.map(({ title, value }, index) => {
            return (
              <div key={index} className="space-y-4">
                <div className="flex">
                  <h5 className="text-[#696969] w-48">{title}</h5>
                  <p className="font-semibold text-[#424141]">{value}</p>
                </div>
                {index !== about.length - 1 ? (
                  <div className="h-[0.5px] bg-gray-400/20" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="basis-1/2">
        <h4 className="text-[#424141] font-bold text-xl">Related fields </h4>
        <div className="space-y-4 pt-8 text-lg">
          {related.map(({ title, value }, index) => {
            return (
              <div key={index} className="space-y-4">
                <div className="flex">
                  <h5 className="text-[#696969] w-48">{title}</h5>
                  <p className="font-semibold text-[#424141]">{value}</p>
                </div>
                <div className="h-[0.5px] bg-gray-400/20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
