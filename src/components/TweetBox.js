import React, { useState } from "react";
import firebase from "firebase/compat/app";
import db from "../firebase";
import {
  ImageIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
} from "../icons/icon";

const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Nihal Hızal",
        username: "@nihalhizal",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image:
          "https://64.media.tumblr.com/c9f8bdfb7ae61c3eb8a00e6ac5ca11a4/07dd3f9d137818fd-4f/s540x810/d83025e503bc5955cb004606132a99794b0cfab5.gif",
        avatar:
          "https://yt3.ggpht.com/yti/APfAmoGbq5cURulFG9LdSWbXWmfO7UoOvmSYMvjSW_RwjsY=s88-c-k-c0x00ffffff-no-rj-mo",
      });
      setContent("");
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
