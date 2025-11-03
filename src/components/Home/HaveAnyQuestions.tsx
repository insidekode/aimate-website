import { homeType } from "@/lib/types";
import { Button } from "../ui/button";

const HaveAnyQuestions = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-gutter mx-auto flex flex-col md:flex-row items-center justify-betwee pt-8 md:pt-14 gap-y-5">
      <div className="max-w-xl">
        <h2 className="text-xl md:text-2xl font-nohemi max-w-60 uppercase">
          {homeData.haveQnTitle}
        </h2>
        <p className="opacity-80 my-4">{homeData.haveQnDescription}</p>
        <Button>Send a message</Button>
      </div>
      {homeData.haveQnSubTitle && (
        <p className="opacity-80 border-l-4 border-primary pl-3">
          {homeData.haveQnSubTitle}
        </p>
      )}
    </div>
  );
};

export default HaveAnyQuestions;
