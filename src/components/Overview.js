import Carousel from "react-multi-carousel";
import ChatGPT01 from "../assets/chatgpt_01.jpg";
import ChatGPT02 from "../assets/chatgpt_02.jpg";
import ChatGPT03 from "../assets/chatgpt_03.jpg";
const Overview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <article>
      <p className="text-[#696969] text-[15px] py-4">
        ChatGPT is a large language model developed by OpenAl. It is designed to
        understand and generate natural language text, allowing it to engage in
        conversations with users on a wide range of topics. ChatGPT was trained
        on a vast corpus of text data and uses advanced machine learning
        algorithms to generate human-like responses to user inputs. Its
        capabilities include answering questions, providing explanations, making
        recommendations, and even telling jokes. ChatGPT is constantly evolving
        and improving as it is exposed to more data and feedback from users.
      </p>
      <Carousel
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        centerMode={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="ml-0"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="mr-8">
        <img src={ChatGPT01} alt="chatgpt 01" />

        <img src={ChatGPT02} alt="chatgpt 02" />

        <img src={ChatGPT03} alt="chatgpt 02" />

        <img src={ChatGPT02} alt="chatgpt 02" />

        <img src={ChatGPT01} alt="chatgpt 01" />
      </Carousel>
    </article>
  );
};

export default Overview;
