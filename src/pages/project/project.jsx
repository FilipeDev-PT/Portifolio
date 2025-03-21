import ItensProject from "./components/itensProject/itensProject";
import style from "./project.module.css";
import Layout from "../../components/layout/layout";

export default function Project() {
  return (
    <Layout>
      <div className={style.divProject}>
        <ItensProject link={""} content={""} />
      </div>
    </Layout>
  );
}
