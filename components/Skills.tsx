import { data } from "@/data/skills";
import { BsDot } from "react-icons/bs";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section id="skills" className="wrapper section-padding">
      <SectionTitle title="Highlighted Skills" subtitle="Skills" />
      {/* SKILLS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-light">
        {/* FRONT-END */}
        <div className="p-10 rounded-xl bg-dark">
          <h3 className="text-2xl font-semibold">Front-End</h3>
          <ul className="mt-3">
            {data.frontend.map((skill: string, i: number) => (
              <li key={i} className="flex items-center gap-1">
                <span>
                  <BsDot />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* BACK-END */}
        <div className="p-10 rounded-xl bg-dark">
          <h3 className="text-2xl font-semibold">Back-End</h3>
          <ul className="mt-3">
            {data.backend.map((skill: string, i: number) => (
              <li key={i} className="flex items-center gap-1">
                <span>
                  <BsDot />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* TOOLS */}
        <div className="p-10 rounded-xl bg-dark">
          <h3 className="text-2xl font-semibold">Tools</h3>
          <ul className="mt-3">
            {data.tools.map((skill: string, i: number) => (
              <li key={i} className="flex items-center gap-1">
                <span>
                  <BsDot />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* INTERPERSONAL */}
        <div className="p-10 rounded-xl bg-dark">
          <h3 className="text-2xl font-semibold">Interpersonal</h3>
          <ul className="mt-3">
            {data.interpersonal.map((skill: string, i: number) => (
              <li key={i} className="flex items-center gap-1">
                <span>
                  <BsDot />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
