import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlokaDetailsType } from "../../assets/Interface";
import { SingleSlokaAPI } from "../../API/SlokasAPI";
import Title from "../TitleComp";
import { Container, Spinner } from "react-bootstrap";
import SlokaDetailsCard from "./SlokaDetailsCard";

const SlokaDetails = () => {
  const { chapter_number } = useParams();
  const { verse_number } = useParams();
  const [Sloka, setSloka] = useState<SlokaDetailsType>();
  // const [slokaList, setSlokaList] = useState<SlokasList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    SingleSlokaAPI(chapter_number, verse_number)
      .then((res) => {
        setSloka(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });

    // SlokaListAPI(Number(chapter_number))
    //   .then((res) => {
    //     setSlokaList(res.data);
    //     console.log(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     console.error(error);
    //   });
  }, [chapter_number, verse_number]);
  return (
    <>
      <Title
        bgurl="https://i.pinimg.com/564x/9b/96/3a/9b963a49a809f9e3a33ef0580e020ba4.jpg"
        title={Sloka?.slug}
        subtitle={""}
      />
      <Container>
        {/* <div className="d-flex justify-content-between align-items-center">
          <Button
            onClick={() => {
              if (verse_number === "1") {
                navigate("/Sloka");
              } else {
                const previous_Sloka = Number(verse_number) - 1;
                navigate(
                  "/Chapter/" + chapter_number + "/Sloka/" + previous_Sloka
                );
              }
            }}
            className="btn btn-outline-warning ms-mt-3"
            variant="light"
          >
            {verse_number === "1" ? "Back to Slokas" : "Back"}
          </Button>
          <Button
            onClick={() => {
              console.log(slokaList.length);
              console.log(verse_number);
              if (verse_number === slokaList.length.toString()) {
                navigate("/Chapter/" + chapter_number + "/Sloka/1");
              } else {
                const Next_Sloka = Number(verse_number) + 1;
                navigate("/Chapter/" + chapter_number + "/Sloka/" + Next_Sloka);
              }
            }}
            className="btn btn-outline-warning ms-mt-3"
            variant="light"
          >
            {" "}
            {verse_number === slokaList.length.toString()
              ? "Back to Sloka 1"
              : "Next"}
          </Button>
        </div> */}
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          <SlokaDetailsCard Sloka={Sloka} />
        )}
      </Container>
    </>
  );
};

export default SlokaDetails;
