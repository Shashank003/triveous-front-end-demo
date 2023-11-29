import { Bookmark, ExternalLink, Eye, Heart, Share2 } from "lucide-react";
import ChatGPTLogo from "../assets/chatgpt_logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-start pb-4">
      <div className="flex gap-x-4">
        <img
          src={ChatGPTLogo}
          className="rounded-lg aspect-auto h-24"
          alt="chatgpt logo"
        />
        <div className=" flex flex-col justify-between">
          <div className="font-semibold">
            <h2 className="text-2xl ">ChatGPT</h2>
            <span className="text-[#636363]">by OpenAI</span>
          </div>
          <div className="flex text-[#696969] text-sm gap-x-4">
            <div className="flex gap-x-1 items-center">
              <Heart className="h-3 w-3" /> 700k Likes
            </div>
            <div className="flex gap-x-1 items-center">
              <Eye className="h-3 w-3" /> 1.2M Views
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-3">
        <button
          type="button"
          className="py-2 px-4 flex gap-x-3 items-center bg-purple-800 rounded-md  text-white">
          <Bookmark className="h-5 w-5" />
          <span className="text-sm">Save</span>
        </button>
        <button
          type="button"
          className="py-2 px-4 flex gap-x-3 items-center border border-purple-800/20 rounded-md text-purple-800">
          <ExternalLink className="h-5 w-5" />
          <span className="text-sm">Visit Site</span>
        </button>
        <button
          type="button"
          className="py-2 px-4 flex gap-x-3 items-center border border-purple-800/20 rounded-md text-purple-800">
          <Share2 className="h-5 w-5" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
