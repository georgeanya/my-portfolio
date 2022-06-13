import React from "react";
import Skills from "./skillcomponent";
import grubix from "../assets/grubbix.png";
import abc from "../assets/abc.png";
import gpt3 from "../assets/gpt3.png";
import george from "../assets/avatar.svg";
import hero from "../assets/hero.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import wp from "../assets/wp.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import boot from "../assets/boot.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import lkin from "../assets/lkin.png";
import em from "../assets/em.png";
import tw from "../assets/tw.png";
import gh from "../assets/gh.png";

const Homepage = () => {
  return (
    <div>
      <div>
        <h1 className='pt-5 mt-5 home_head_text'>Front-end Developer</h1>
        <p className='p-3 home_sub_text'>
          I code beautiful websites, and I love what I do.
        </p>
        <img src={george} alt='' width='210px' className='rounded-circle m-5' />
      </div>
      <img src={hero} alt='' className='mt-5 hero' />
      <div id='about' className='about-me'>
        <div className='about-me-text'>
          <h1 className='about-me-content-text'>
            Hi, I'm George. Nice to meet you.
          </h1>
          <p className=".about-me-content-text-p">
            I am a quality oriented professional with 1+ years of experience and
            proven knowledge of front-end engineering framework and
            technologies. Aiming to leverage my skills to successfully fill the
            front-end engineering role at your company.
          </p>
          <button class='button-21'>Resume</button>
          <button class='button-21'>Contact Me</button>
        </div>
      </div>
      <div id='about' className='page_pad py-5'>
        <div className='row mb-4'>
          <div className='col-1'>
            <hr width='60px' />
          </div>
          <div className='col-11'>
            <p className='text-start small-p'>CHECK OUT MY</p>
          </div>
        </div>
        <h2 className='text-start skill-head'>SKILLS</h2>
        <div className='d-flex skill my-5 flex-wrap justify-content-center rounded-4 p-5'>
          <Skills img={html} text='HTML' />
          <Skills img={css} text='CSS' />
          <Skills img={js} text='JS' />
          <Skills img={boot} text='BOOTSTRAP' className='mt-3'/>
          <Skills img={sass} text='SASS' />
          <Skills img='' text='TAILWIND' />
          <Skills img={react} text='REACT' />
          <Skills img={wp} text='WORDPRESS' />
          <Skills img={git} text='GIT' />
          <Skills img={github} text='GITHUB' />
        </div>
      </div>
      <div id='project' className='page_pad'>
        <div className='row mb-4'>
          <div className='col-1'>
            <hr width='60px' />
          </div>
          <div className='col-11'>
            <p className='text-start small-p'>TAKE A LOOK AT MY</p>
          </div>
        </div>
        <h2 className='text-start skill-head'>PROJECTS</h2>
        <div className='d-flex skill my-5 flex-wrap justify-content-center rounded-4 p-5'>
          <div className='spice'>
            <div className='spice_card rounded-5'>
              <img src={abc} alt='' className='spice_image  rounded-5' />
              <div className='middle  rounded-5'>
                <p className='spice_text'> Training Schools </p>
                <button class='button-21'>visit website</button>
              </div>
            </div>
            <div className='spice_card rounded-5'>
              <img src={grubix} alt='' className='spice_image rounded-5' />
              <div className='middle rounded-5'>
                <p className='spice_text'> Family Get-Together </p>
                <button class='button-21'>visit website</button>
              </div>
            </div>
            <div className='spice_card rounded-5'>
              <img src={gpt3} alt='' className='spice_image rounded-5' />
              <div className='middle rounded-5'>
                <p className='spice_text'> Birthday parties </p>
                <button class='button-21'>visit website</button>
              </div>
            </div>
            <div className='spice_card rounded-5'>
              <img src={grubix} alt='' className='spice_image rounded-5' />
              <div className='middle rounded-5'>
                <p className='spice_text'> Outdoor Parties </p>
                <button class='button-21'>visit website</button>
              </div>
            </div>
            <div className='spice_card rounded-5'>
              <img src={gpt3} alt='' className='spice_image rounded-5' />
              <div className='middle rounded-5'>
                <p className='spice_text'> Wedding Parties </p>
                <button class='button-21'>visit website</button>
              </div>
            </div>
            <div className='spice_card rounded-5'>
              <img src={abc} alt='' className='spice_image rounded-5' />
              <div className='middle rounded-5'>
                <p className='spice_text'> Holiday Celebrations </p>
                <button class='button-21'>visit website</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connect py-5 my-5 p-2">
        <h2>Interested in collaborating or investing?</h2>
        <p>I’m always open to discussing product design work or partnership opportunities.</p>
        <button class="button-80">Start a conversation</button>
      </div>
      <div className='footer'>
        <div>
          <h2 className="footer-text">thegeorgeanya</h2>
          <p className="footer-text">Living, learning, and leveling up one day at a time.</p>
        </div>
        <div className='socials'>
          <a href='mailto:'>
            <img src={gh} alt='' />
          </a>
          <a href='mailto:'>
            <img src={tw} alt='' />
          </a>
          <a href='mailto:'>
            <img src={lkin} alt='' />
          </a>
          <a href='mailto:'>
            <img src={em} alt='' />
          </a>
        </div>
        <p className="footer-text">Handcrafted by me, George Anya.</p>
      </div>
    </div>
  );
};

export default Homepage;