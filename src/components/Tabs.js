import React from "react";

const Tabs = () => {
  return (
    <div className="relative">
      <div className="flex gap-x-8 font-semibold">
        <h3 className="text-purple-800 underline decoration-2 underline-offset-[16px] decoration-purple-800">
          Overview
        </h3>
        <h3>About OpenAI</h3>
      </div>
      <div className="h-[1px] bg-gray-400/50 absolute -bottom-3 w-full" />
    </div>
  );
};

export default Tabs;
