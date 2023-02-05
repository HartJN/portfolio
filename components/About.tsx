import React from 'react'
import Image from 'next/image'

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Test Driven Development' },
  { skill: 'Node.js' },
  { skill: 'MongoDB' },
  { skill: 'Sqlite3' },
  { skill: 'Knex' },
  { skill: 'React' },
  { skill: 'Express' },
  { skill: 'Sass' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Agile' },
]

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-primaryAccent border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hey there! My name is James and I&apos;m a{' '}
              <span className="font-bold">{'passionate'}</span> software
              engineer based in New Zealand. I&apos;ve always been{' '}
              <span className="font-bold">{' driven'}</span> to improve my
              skills and stay up-to-date with the latest technologies.
            </p>
            <br />
            <p>
              I recently graduated from Dev Academy Aotearoa where I honed my
              skills in various web development technologies, such as:
              JavaScript, React, and test-driven development. I also had the
              opportunity to work with a great team of developers, which I
              loved.
            </p>
            <br />
            <p>
              Before that, I taught myself computer science and dived into a
              wide range of core concepts. I have a real passion for algorithms
              and solving complex problems, which is what keeps me motivated and
              always eager to learn more.
            </p>
            <br />
            <p>
              I&apos;ve been freelancing at Studio Rebeko as a Web Development
              Consultant since 2020 and I&apos;m proud of the contributions
              I&apos;ve made to the company&apos;s growth. I love being part of
              a team and working with others to bring ideas to life.
            </p>
            <br />
            <p>
              In my free time, I love exploring new technologies and finding new
              ways to improve my skills as a software engineer. I&apos;m always
              on the lookout for new opportunities and can&apos;t wait to see
              where my career takes me next.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              // src="/heart-outline-noBG.webp"
              src="/HeartSVG.svg"
              draggable="false"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
