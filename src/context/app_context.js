import { createContext, useState } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  const [skills, setSkills] = useState(["React", "javascript"]);
  const [name, setName] = useState("Zack");

  const changeName = () => {
    let n = prompt("Change name to what?");
    setName(n);
  };

  const addSkill = () => {
    let skill = prompt("Skill to add?");
    setSkills([...skills, skill]);
  };
  return (
    <ResumeContext.Provider value={{ skills, addSkill, name, changeName }}>
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
