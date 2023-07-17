import { createContext, useState } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  const [skills, setSkills] = useState(["React", "javascript"]);
  const [name, setName] = useState("Zack");
  const [job, setJob] = useState("Software Engineer");
  const [experience, setExperience] = useState(["Per Scholas"]);
  const [references, setReferences] = useState(["Jordan Wafford"]);

  const changeName = () => {
    let n = prompt("Change name to what?");
    setName(n);
  };

  const changeJob = () => {
    let j = prompt("Change position to what?");
    setJob(j);
  };

  const addSkill = () => {
    let skill = prompt("Skill to add?");
    setSkills([...skills, skill]);
  };

  const addExp = () => {
    let exp = prompt("Experience to add?");
    setExperience([...experience, exp]);
  };
  return (
    <ResumeContext.Provider
      value={{
        name,
        changeName,
        job,
        changeJob,

        skills,
        addSkill,

        experience,
        addExp,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
