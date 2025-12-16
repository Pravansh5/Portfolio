import React from "react";

const Github = () => {
  return (
    <section
      id="github"
      className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-block">
              <h2 className="text-4xl font-bold text-white">GITHUB STATS</h2>
              <div className="h-1 bg-[#c7f837] mt-1"></div>
        </div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Some of my GitHub contributions and statistics
        </p>
      </div>

      {/* GitHub Stats Cards */}
<div className="flex flex-col md:flex-row items-center justify-center gap-6">

    {/* GitHub Stats Card */}
    <div className="w-full md:w-1/2 border border-[#c7f837] rounded-2xl shadow-[0_0_25px_2px_rgba(199,248,55,0.25)]">
      <img
        src={`https://github-readme-stats.vercel.app/api?username=Pravansh5&show_icons=true&theme=transparent&text_color=ffffff&icon_color=c7f837&title_color=c7f837&bg_color=151515`}
        alt="GitHub Stats"
        className="rounded-lg w-full"
      />
    </div>

    {/* Top Languages Card */}
    <div className="w-full md:w-1/2 border border-[#c7f837] rounded-2xl shadow-[0_0_25px_2px_rgba(199,248,55,0.25)]">
      <img
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Pravansh5&layout=compact&theme=transparent&text_color=ffffff&title_color=c7f837&bg_color=151515&langs_count=6`}
        alt="Top Languages"
        className="rounded-lg w-full"
      />
    </div>

  </div>
    </section>
  );
};

export default Github;
