import style from "./Title.module.css";
const Title: React.FC<{
  bgurl: string;
  title: string | undefined;
  subtitle: string | undefined;
}> = ({ bgurl, title, subtitle }) => {
  const bg = {
    backgroundImage: `url(${bgurl})`,
  };
  return (
    <div className={style.title}>
      <div className={style.titleSubBody} style={bg}>
        <div className={style.titletxtBg}>
          {" "}
          <span className={style.hindiTitletxt}>{title}</span>
          <span className={style.hindiTitleSubtxt}>{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
