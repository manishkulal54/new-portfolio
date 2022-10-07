import React from "react";
import "../stylingsheets/Skill.css"

export default function Skill() {
  return (
    <>
      <div className="container_s">
        <p className="head">Skills </p>
        <div className="subcontainer_s">


          <div className="card">
            <p>Frontend Design</p>
            <p>
            Design creates culture. Culture shapes values. Values determine the future.
            When design doesn’t consider ALL users, shouldn’t it be known as “SOME User Experience” or… SUX?
            </p>
          </div>
          <div className="card">
            <p>Backend Design</p>
            <p>
            A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or products you offer. Collect Contact details for future ongoing relation.
            </p>
          </div>
          <div className="card">
            <p>SEO and Optimization</p>
            <p>
            Content is what the search engines use to fulfill user intent.Impactful SEO is rarely executed by a lone wolf.
            </p>
          </div>
          <div className="card">
            <p>App development</p>
            <p>
            Tech will transform from something we actively use to a more seamless integrated experience that is ‘ on ’ all the time.
            </p>
          </div>
          <div className="card">
            <p>AI Developer</p>
            <p>
            A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.
            </p>
          </div>
          <div className="card">
            <p>Programming</p>
            <p>
            Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
