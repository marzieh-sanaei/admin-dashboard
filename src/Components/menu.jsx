import Chart1 from "./chart1";
import Chart2 from "./chart2";
import Chart3 from "./chart3";
import Chart4 from "./chart4";
import Calender from "./calender";
import Map from "./map";

export default function Menu() {
  return (
    <>
      <div className="w-full bg-[#2e333f] flex justify-center flex-col">
        <div className="lg:w-[95%] w-[100%] rounded-md bg-[#454b5c] mb-5">
          <h2 className="uppercase text-gray-100 text-[25px] fonts px-[22px] py-[8px]">
            dashboard
          </h2>
        </div>
        <div className="lg:w-[95%] w-[100%] h-[270px] rounded-md bg-[#454b5c] mb-[20px] p-2">
          <Chart1 />
        </div>
        <div className="flex lg:w-[95%] w-[100%] justify-between md:h-[230px] h-auto mb-5 flex-wrap">
          <div className="bg-[#454b5c] md:w-[33%] mb-4 md:mb-0 w-[100%] rounded-md p-2">
            <Chart2 />
          </div>
          <div className="bg-[#454b5c] md:w-[33%] mb-4 md:mb-0 w-[100%] rounded-md p-2">
            <Chart3 />
          </div>
          <div className="bg-[#454b5c] md:w-[33%] w-[100%] rounded-md p-2">
            <Chart4 />
          </div>
        </div>
        <div className="lg:w-[95%] w-[100%] sm:flex justify-between items-center mb-5 flex-wrap">
          <div className="md:w-[54%] w-[100%] bg-[#454b5c] rounded-md sm:mb-0 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51843.21164196608!2d51.337499169531256!3d35.69667775853304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1702909812758!5m2!1sen!2sfr"
              className="rounded-[5px]"
              width="100%"
              height="320"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:w-[45%] w-[100%] bg-[#454b5c] rounded-md mt-[15px]">
            <Calender />
          </div>
        </div>
      </div>
    </>
  );
}
