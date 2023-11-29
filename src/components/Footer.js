import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FBFDFF] border-t">
      <div className="mx-auto w-full max-w-screen-xl pt-10 px-2.5 md:px-20">
        <div className="flex justify-between pb-24">
          <div className="space-y-4 max-w-md">
            <h6 className="tracking-[0.2em] text-2xl">THE OUTPOST</h6>
            <h6 className="font-semibold text-xl">Your one-stop AI hub</h6>
            <p className="text-[#696969] text-[17px]">
              The Outpost is a comprehensive collection of curated artificial
              intelligence software tools that cater to the needs of small
              business owners, bloggers, artists, musicians, entrepreneurs,
              marketers, writers, and researchers.
            </p>
          </div>
          <div className="flex gap-x-16">
            <div className="space-y-4">
              <h6 className="font-semibold text-xl">The Outpost</h6>
              <ul className="space-y-2">
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  About us
                </li>
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  Terms and conditions
                </li>
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  Privacy policy
                </li>
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-semibold text-xl">Keep in touch</h6>
              <div className="flex gap-x-4">
                <Twitter className="h-9 w-9 bg-[#EDECEC] text-[#424141] fill-[#424141] p-2 rounded-full" />
                <Instagram className="h-9 w-9 bg-[#EDECEC] text-[#424141]  p-2.5 rounded-full" />
                <Linkedin className="h-9 w-9 bg-[#EDECEC] text-[#424141]  p-2.5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
