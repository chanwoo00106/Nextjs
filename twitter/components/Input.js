/* eslint-disable @next/next/no-img-element */
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function Input() {
  const [input, setInput] = useState("");
  const [selectFile, setSelectFile] = useState();
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

  const addImageToPost = () => {
    if (loading) return;
    setLoading(true);
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("-");
    const codesArray = sym.map((i) => `0x${i}`);
    try {
      const emoji = String.fromCodePoint(codesArray);
      setInput(input + emoji);
    } catch (e) {}
  };

  const sendPost = () => {};

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3  overflow-y-hidden`}
    >
      <img
        src="https://yt3.ggpht.com/yti/APfAmoEcGZncTmkGdWJSEn3kU0JOqJg3xgGuGevK7tLW=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="profile"
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px] overflow-auto"
            placeholder="What's happening?"
          />

          {selectFile && (
            <div className="relative">
              <div
                onClick={() => setSelectFile(null)}
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                onChange={addImageToPost}
                ref={filePickerRef}
                hidden
              />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            {showEmojis && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}
          </div>
          <button
            disabled={!input.trim() && !selectFile}
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 default:cursor-default"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
