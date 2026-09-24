import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./heroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full overflow-hidden bg-linear-to-b from-indigo-50 via-white to-white px-5 pb-20 pt-16 sm:pt-20 lg:px-10"
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center text-center">
          <HeroBadge />
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
        </div>

        <div className="mt-14 w-full">
          <HeroImage />
        </div>

        <div className="mt-16 w-full">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

export default Hero;