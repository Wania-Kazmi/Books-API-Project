import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        <div className="item">
          <img src="https://picsum.photos/400/300" alt="" />
          <div>
            <h2>Blog title 1</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/400/300?1" alt="" />
          <div>
            <h2>Blog title 2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/400/300?2" alt="" />
          <div className="desc">
            <h2>Blog title 3</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/400/300?3" alt="" />
          <div className="desc">
            <h2>Blog title 4</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/400/300?4" alt="" />
          <div className="desc">
            <h2>Blog title 5</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/400/300?5" alt="" />
          <div className="desc">
            <h2>Blog title 6</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
