import Layout from "../../components/layout/layout";
import style from "./about.module.css";

export default function About() {
  return (
    <Layout>
      <div className={style.divContentAbout}>
        <div>
          <img src="" alt="" />
        </div>
        <div className={style.divContentTitle}>
          <h3>Desenvolvedor</h3>
          <h4>Frontend</h4>
          <p>Desenvolvimento</p>
        </div>
      </div>
    </Layout>
  );
}
