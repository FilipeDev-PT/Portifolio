import ItensProject from "./components/itensProject/itensProject";
import style from "./project.module.css";

export default function Project() {
  return (
    <div className={style.divProject}>
      <ItensProject link={""} content={""} />
    </div>
  );
}
