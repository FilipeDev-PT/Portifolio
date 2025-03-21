import Layout from "../../components/layout/layout";
import style from "./skills.module.css";
import Skill from "./compnents/skill/skill";

export default function Skills() {
  return (
    <Layout>
      <div className={style.divContentSkills}>
        <Skill link={""} content={""} />
        <Skill link={""} content={""} />
        <Skill link={""} content={""} />
        <Skill link={""} content={""} />
        <Skill link={""} content={""} />
      </div>
    </Layout>
  );
}
