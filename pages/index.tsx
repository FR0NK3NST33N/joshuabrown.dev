import type { NextPage } from "next";
import { Layout, Logo } from "../Components";
import { AiOutlineCode } from "react-icons/ai";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex min-h-full lg:flex-row md:flex-col flex-col min-w-full">
        <div className="flex lg:basis-[33vw] md:basis-[20vh] lg:grow md:shrink justify-center lg:items-center lg:min-h-full">
          <div className="flex flex-col items-center">
            <Logo />
            <h1 className="font-mono font-bold text-4xl -mt-8 z-10">
              Josh Brown
            </h1>
            <h1 className="font-bold text-xl text-slate-700 mt-2">Colorado</h1>
            <div className="flex flex-row mt-4">
              <a
                href="https://github.com/FR0NK3NST33N"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialGithubCircular className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/fr0nk3nst33n/"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="text-4xl" />
              </a>
              <a
                href="https://twitter.com/fr0nk3nst33n"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex basis-[66vw] flex-col grow lg:justify-center min-h-full lg:p-64 md:p-8">
          <h1 className="font-bold text-4xl pb-4"> Work</h1>
          <a
            href="https://github.com/peet-defi/parallax-ui"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-slate-700 p-1 md:min-w-[465px] lg:max-w-2xl lg:justify-center sm:min-w-full clipped hover:cursor-pointer mb-4">
              <div className="bg-dark min-w-full p-4 hover:bg-slate-700 clipped-inner">
                <h1 className="text-2xl font-bold">Parallax UI</h1>
                <div className="flex flex-row">
                  <AiOutlineCode className="mt-1 mr-2" />
                  NextJS, Chakra
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/FR0NK3NST33N/doction"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-slate-700 p-1 md:min-w-[465px] lg:max-w-2xl lg:justify-center sm:min-w-full clipped hover:cursor-pointer mb-4">
              <div className="bg-dark min-w-full p-4 hover:bg-slate-700 clipped-inner">
                <h1 className="text-2xl font-bold">Doction</h1>
                <div className="flex flex-row">
                  <AiOutlineCode className="mt-1 mr-2" />
                  Rust
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://ssb-components.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-slate-700 p-1 md:min-w-[465px] lg:max-w-2xl lg:justify-center sm:min-w-full clipped hover:cursor-pointer mb-4">
              <div className="bg-dark min-w-full p-4 hover:bg-slate-700 clipped-inner">
                <h1 className="text-2xl font-bold">SSB Components</h1>
                <div className="flex flex-row">
                  <AiOutlineCode className="mt-1 mr-2" />
                  React, Bulma, Storybook
                </div>
              </div>
            </div>
          </a>
          <div className="bg-slate-700 p-1 md:min-w-[465px] lg:max-w-2xl lg:justify-center sm:min-w-full clipped hover:cursor-pointer mb-4">
            <div className="bg-dark min-w-full p-4 hover:bg-slate-700 clipped-inner">
              <h1 className="text-2xl font-bold">More to come...</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
