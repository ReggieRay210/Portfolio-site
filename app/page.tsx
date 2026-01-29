'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// site layout customization
const section = 'h-screen mb-4 overflow-hidden';
const sectionSnapStart = 'snap-y snap-mandatory overflow-y-scroll h-screen';
const sectionSnapTo = 'snap-always snap-center duration-[2s]  ease-in';
// page information
const pages = ['About', 'Skills', 'Projects', 'Contact'];
const sectionTitle = 'text-sky-400 text-3xl font-bold my-4 ';
const heroText = 'text-left text-md';

// skills table customization
const tableImages = 'place-items-center';
const tableText = 'text-center text-black text-xs';

// project slideshow
const slideSnapStart =
  'snap-x flex snap-mandatory h-[90%] w-[100%] mx-auto overflow-scroll';
const slideSnapTo =
  'p-4 snap-center flex-shrink-0 h-[100%] w-[100%] flex items-center justify-between text-center';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projectsRefContainer = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const projectsContainer = projectsRefContainer.current;
    if (projectsContainer === null) return;

    const onWheel = (mouse:WheelEvent)=>{
      mouse.preventDefault();
      // mouse.scrollLeft = mouse.scrollLeft + mouse.deltaY;
    };
    projectsContainer.addEventListener('wheel', onWheel, {passive:false});

    return () =>{
      projectsContainer.removeEventListener('wheel', onWheel);
    };
  },[]);

  return (
    <main className={`${sectionSnapStart}`}>
      {/* group1 */}
      <div className={`${section} ${sectionSnapTo}`}>
        {/* nav section */}
        <nav className="relative flex items-center justify-between">
          <Image
            src="/portfolioLogo.png"
            width={200}
            height={0}
            alt="logo"
            unoptimized
          />
          <div className="mr-4">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="sm:hidden"
            >
              ☰
            </button>
          </div>

          <ul className="hidden sm:flex space-x-3.5 items-center text-white font-bold">
            {pages.map((page) => {
              const href = (page = `${page}`);
              return (
                <li key={page}>
                  <Link href={`#${href.toLowerCase()}`}>{page}</Link>
                </li>
              );
            })}
          </ul>
          {menuOpen && (
            <ul className="absolute right-0 top-full z-20 mt-2 w-40 rounded-md bg-white text-black shadow-md sm:hidden">
              {pages.map((page) => (
                <li key={page}>
                  <Link
                    href={`#${page.toLowerCase()}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {/* ================================ */}

        {/* hero section */}
        <div className="sm:flex sm:justify-between">
          <div>
            <h5 className={`${heroText}`}>Hi, My name is</h5>
            <h1 className={`${heroText} mb-2 font-bold text-5xl md:text-6xl `}>
              Reginald Griffin II
            </h1>
            <h5 id="title" className={`${heroText}`}>
              <span id="titleName">in San Antonio, Tx</span>
            </h5>
            <button
              id="contactBtn"
              className="relative my-2 overflow-hidden rounded-xl text-sky-400 font-bold px-6 "
            >
              <Link href={`#${pages[3].toLowerCase()}`}>Let's Connect</Link>
            </button>
          </div>

          <div>
            <Image
              className="mx-auto"
              src="/headshot.png"
              width={320}
              height={100}
              style={{
                borderRadius: '0px 0px 120px ',
                objectFit: 'contain',
                objectPosition: '10% 10%',
              }}
              alt="headshot image"
              unoptimized
            />
          </div>
        </div>
        {/* ================================ */}
      </div>

      {/* ****************************************** */}

      {/* group2 */}
      <div id="about" className={`${section} ${sectionSnapTo}`}>
        {/* about section */}
        <h5 className={`${sectionTitle}`}>{pages[0]}</h5>
        <p className="mx-10 font-light text-sm text-pretty lg:text-lg">
          My name is Reginald Griffin II. I am an IT professional based in San
          Antonio with experience supporting enterprise users, systems, and
          security focused environments. I began my IT career in 2021 as a Help
          Desk Technician, where I supported end users, resolved technical
          issues, and worked within structured operational processes. That
          foundation exposed me to how systems operate at scale and how small
          improvements reduce error and time.
          <br />
          <br />
          Through daily support work, I developed an interest in automation and
          problem reduction. I began building tools and scripts to streamline
          repetitive tasks using PowerShell, Bash, and Python. This work
          expanded into software and web development, where I am self taught and
          project driven. I have built command line tools, automated workflows,
          and deployed web applications using HTML, CSS, and JavaScript.
          <br />
          <br />I continue to grow my skill set based on real world needs and
          industry demand. I am actively learning React and TypeScript while
          developing and maintaining a freelance client website. My professional
          focus centers on reliability, clear communication, continuous
          learning, and building practical solutions that improve systems and
          user experience.
        </p>
        {/* ================================ */}
      </div>
      {/* ****************************************** */}

      {/* group3 */}
      <div className={`${section} ${sectionSnapTo}`}>
        {/* skills section */}
        <h5 id="skills" className={`${sectionTitle}`}>
          {pages[1]} & Experience
        </h5> 
        <div className='border mx-10 ' >
          <p className="italic">
            <q>
              A jack of all trades is a master of none, but oftentimes better than
              a master of one.
            </q><br /><br />
          </p>
          <p>I have provided services in multiple areas within the IT sector from Hardware and Software
            to Networking and Security.<br /> <br />Here are some of the tools and resources that I have used over time.
          </p>
        </div>
        
        <table className="mt-4 border-separate w-[90%] mx-auto">
          <tbody>
            <tr className={`${tableText}`}>
              <td className={`${tableImages}`}>
                <img
                  width="60"
                  height="50"
                  src="https://img.icons8.com/ios/50/figma--v1.png"
                  alt="figma--v1"
                />
                Figma
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="60"
                  height="50"
                  src="https://img.icons8.com/wired/64/visual-studio-code-2019--v2.png"
                  alt="visual-studio-code-2019--v2"
                />
                Visual Studio
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="60"
                  height="50"
                  src="https://img.icons8.com/ios/50/git.png"
                  alt="git"
                />
                Git
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="60"
                  height="50"
                  src="https://img.icons8.com/ios/50/html-5--v1.png"
                  alt="html-5--v1"
                />
                HTML5
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="70"
                  height="60"
                  src="https://img.icons8.com/ios/60/css3.png"
                  alt="css3"
                />
                CSS3
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="70"
                  height="60"
                  src="https://img.icons8.com/ios/60/bootstrap.png"
                  alt="bootstrap"
                />
                Bootstrap5
              </td>
            </tr>
            <tr className={`${tableText}`}>
              <td className={`${tableImages}`}>
                <img
                  width="60"
                  height="50"
                  src="https://img.icons8.com/material-rounded/50/tailwind_css.png"
                  alt="tailwind_css"
                />
                Tailwind CSS
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="70"
                  height="60"
                  src="https://img.icons8.com/ios/60/react-native--v1.png"
                  alt="react-native--v1"
                />
                React
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="70"
                  height="60"
                  src="https://img.icons8.com/ios/60/typescript.png"
                  alt="typescript"
                />
                TypeScript
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="70"
                  height="60"
                  src="https://img.icons8.com/ios/50/python--v1.png"
                  alt="python--v1"
                />
                Python
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="70"
                  height="60"
                  src="https://img.icons8.com/ios/50/powershell.png"
                  alt="powershell"
                />
                Powershell
              </td>
              <td className={`${tableImages}`}>
                <img
                  width="60"
                  height="50"
                  src="https://img.icons8.com/ios/50/linux.png"
                  alt="linux"
                />
                Linux
              </td>
            </tr>
          </tbody>
        </table>
        {/* ================================ */}
      </div>

      {/* ****************************************** */}

      {/* group4 */}
      <div className={`${section} ${sectionSnapTo}`}>
        {/* projects section */}
        <h5 id="projects" className={`${sectionTitle}`}>
          {pages[2]}
        </h5>

        {/* Horizontal scroll container */}
        <div ref={projectsRefContainer} className={`${slideSnapStart}`}>
          <div className={`${slideSnapTo}`}>
            <p className='mx-auto text-2xl font-bold'>
              A variety of unique projects have been built to meet each client's
              business needs. Here are a few:
            </p>
          </div>
          <div className={`${slideSnapTo}`}>
            <div>
              <h5 className="text-md font-thin text-gray-200">Portfolio website</h5>
              <h5 className="text-[2rem] md:text-[3rem]">
                WPP Remodel & construction
              </h5>
              <h5>
                <span className="text-[#FF4303]">Built with</span>: NextJS, React,
                Tailwind
              </h5>
            </div>
            <Image
              className="w-[40%]"
              src="/WPP.png"
              width={450}
              height={0}
              alt="WPP site"
              unoptimized
            />
          </div>
          <div className={`${slideSnapTo}`}>
            <div>
              <h5 className="text-md font-thin text-gray-200">Portfolio website</h5>
              <h5 className="text-[2rem]">Radiant Designs Hair Salon</h5>
              <h5>
                <span className="text-[#FF4303]">Built with</span>: Bootstrap 5
              </h5>
            </div>
            <Image
              className="w-[40%]"
              src="/RadiantDesigns.png"
              width={450}
              height={0}
              alt="RadiantDesigns site"
              unoptimized
            />
          </div>
        </div>
        {/* ================================ */}
      </div>
      {/* ****************************************** */}

      {/* group5 */}
      <div id="contact" className={`${section} ${sectionSnapTo}`}>
        {/* contact section */}
        <h5 className={`${sectionTitle}`}>{pages[3]}</h5>
        <p>
          I focus on building dependable solutions and fixing problems fast. You
          get clean work, clear updates, and strong follow through. View my
          projects. Reach out to start a conversation.
        </p>
        <h5 className="mt-3 font-bold text-2xl hover:text-[#FF4303] hover:underline transition">
          r.griffin2680@gmail.com
        </h5>

        {/* ================================ */}
      </div>
      {/* ****************************************** */}
    </main>
  );
}
