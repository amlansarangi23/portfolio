import React from "react";
import Image from "next/image";
import icon from "./Images/icon.svg"

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap ml-16">
        <div className="w-full">
          <ul
            className="mb-0 grid grid-cols-1 sm:grid-cols-3 list-none pb-4"
            role="tablist"
          >
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center w-[95%]">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-violet-600"
                    : "text-blueGray-600 bg-violet-800")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Skills
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center w-[95%]">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-violet-600"
                    : "text-blueGray-600 bg-violet-800")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Experience
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center w-[95%]">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-violet-600"
                    : "text-blueGray-600 bg-violet-800")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Certifications
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-violet-800  w-full mb-6 shadow-lg rounded h-80">
            <div className="px-4 py-5 flex-auto ">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid grid-cols-3">
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>
                    <div className="m-2 text-center">
                      <Image src={icon} className="m-auto mb-2"></Image>
                      REACTJS
                    </div>

                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;