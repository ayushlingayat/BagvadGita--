import About from "../components/Home/About";
import Reason from "../components/Home/Reason";
import Title from "../components/TitleComp";

const Home: React.FC = () => {
  return (
    <>
      <Title
        bgurl="https://i.pinimg.com/564x/12/8a/1c/128a1ce898455254ddbed4ad10b38817.jpg"
        title="जीवनाय : गीता"
        subtitle="Gita for Life"
      />
      <About />
      <Reason />
    </>
  );
};

export default Home;
