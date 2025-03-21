import style from "./skill.module.css";

export default function Skill({ link, content }) {
  return (
    <div>
      <img src={link} alt="" className={style.imgSkills} />
      <p>{content}</p>
    </div>
  );
}
