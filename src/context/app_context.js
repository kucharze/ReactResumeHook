import { createContext, useState } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  const [skills, setSkills] = useState(["React", "javascript"]);
  const [name, setName] = useState("Zachary Kuchar");
  const [job, setJob] = useState("Software Engineer");
  const [experience, setExperience] = useState(["Per Scholas"]);
  const [references, setReferences] = useState(["Jordan Wafford"]);

  const changeName = () => {
    let n = prompt("Change name to what?");
    setName(n);
  };

  const changeJob = () => {
    let j = prompt("Change position to what?");
    if (j !== null) {
      setJob(j);
    }
  };

  const addSkill = () => {
    let skill = prompt("Skill to add?");
    if (skill !== null) {
      setSkills([...skills, skill]);
    }
  };

  const addExp = () => {
    let exp = prompt("Experience to add?");
    if (exp !== null) {
      setExperience([...experience, exp]);
    }
  };

  const addRef = () => {
    let ref = prompt("Reference to add?");
    console.log(ref);
    if (ref !== null) {
      setReferences([...references, ref]);
    }
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

        references,
        addRef,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
