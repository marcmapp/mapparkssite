
import { Compare } from "./ui/image-compare";

export function CompareDemo() {
  return (
    <div className="flex justify-center w-full">
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-center"
          secondImageClassname="object-cover object-center"
          // WIDER FRAME - Changed width from w-[200px]/w-[500px] to w-[300px]/w-[600px]
          className="h-[250px] w-[300px] md:h-[400px] md:w-[1200px]"
          slideMode="hover"
          autoplay={true}
          autoplayDuration={5000}
        />
      </div>
    </div>
  );
}