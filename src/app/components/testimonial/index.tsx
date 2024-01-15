import React from "react";
import Button from "../Button";
import "./index.scss";
import { Josefin_Sans } from "next/font/google";
import CommentCart from "../CommentCart";

type Props = {};
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const Testimonial = (props: Props) => {
  return (
    <div className="testimonial">
      <div className="testimonial__header">
        <span className="testimonial__title">Testimonial</span>
        <div className="testimonial__header__text">
          <h1 className="testimonial__header__heading">
            What are Customers says
          </h1>
          <p className="testimonial__header__para">
            Projectile helps you collaborate more smoothly and communicate
            better. Projectile helps you collaborate more smoothly and
            communicate better.
          </p>
        </div>
      </div>
      <div className="testimonial__carts">
        <div className="testimonial__carts__gradient"></div>
        <CommentCart
          name="Danny Zebelski"
          designation="CEO of Hurricane Tbk."
          comment="“Chainlist is amazing stuff. I use it everyday and it helps me to maintain my sanity.”"
          picture="/assets/images/pic1.png"
        />
        <CommentCart
          name="Sandra Tilbe"
          designation="CTO of Metagroup"
          comment="“We love your product and are so glad we can help spread the news!”"
          picture="/assets/images/pic1.png"
        />
        <CommentCart
          name="Leonardo Bernadechi"
          designation="Freelancer"
          comment="“The best Project Management App is: Chainlist, I absolutely love them.”"
          picture="/assets/images/pic1.png"
        />
        <CommentCart
          name="Danny Zebelski"
          designation="CEO of Hurricane Tbk."
          comment="“Chainlist is amazing stuff. I use it everyday and it helps me to maintain my sanity.”"
          picture="/assets/images/pic1.png"
        />
        <CommentCart
          name="Sandra Tilbe"
          designation="CTO of Metagroup"
          comment="“We love your product and are so glad we can help spread the news!”"
          picture="/assets/images/pic1.png"
        />
        <CommentCart
          name="Leonardo Bernadechi"
          designation="Freelancer"
          comment="“The best Project Management App is: Chainlist, I absolutely love them.”"
          picture="/assets/images/pic1.png"
        />
      </div>
      <Button
        name="See all Reviews"
        className={`testimonial__button ${josefin_sans}`}
      />
    </div>
  );
};

export default Testimonial;
