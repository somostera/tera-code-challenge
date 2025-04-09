const HomeBanner = () => {
  return (
    <div
      className="bg-amber-50 flex items-center justify-center py-20 lg:py-40 px-5"
      style={{
        backgroundImage: "url(/images/banner.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto text-center">
        <h1 className="text-blue-950 text-[24px] lg:text-[48px] font-semibold mb-3">
          Explore Nossos Cursos
        </h1>
        <p className="text-sm text-gray-600">
          Descubra conteúdos criados por especialistas para acelerar sua jornada
          de aprendizado
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
