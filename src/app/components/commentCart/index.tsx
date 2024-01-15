import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import "./index.scss";

type Props = {
  name: string;
  comment: string;
  picture: string;
  designation: string;
};
const inter = Inter({ subsets: ["latin"] });
const CommentCart = ({ name, comment, picture, designation }: Props) => {
  return (
    <div className="comment-cart">
      <div className="comment-cart__wrapper">
        <div
          className={`comment-cart__comment ${inter.className}`}
          style={{ fontStyle: "italic" }}
        >
          {comment}
        </div>
        <div className="comment-cart__line"></div>
      </div>
      <div className="comment-cart__name-picture">
        <Image src={picture} alt="Profile Picture" width={60} height={60} />
        <div className="comment-cart__name-designation">
          <span className={`comment-cart__name ${inter.className}`}>
            {name}
          </span>
          <span className={`comment-cart__designation ${inter.className}`}>
            {designation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentCart;
