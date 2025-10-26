import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left z-10">
        {/* === Image Section === */}
        <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-primary animate-float">
          <img
            src="image.png"
            alt="Dheany Lyn Claire Jereza"
            className="object-cover w-full h-full"
          />
        </div>

        {/* === Text Section === */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Dheany Lyn Claire Jereza
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              Good things take time.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* === Scroll Indicator === */}
    </section>
  );
};
