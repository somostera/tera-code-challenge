const HomeBanner = () => {
  return (
    <div
      className="bg-amber-50 flex items-center justify-center py-40 px-5"
      style={{
        backgroundImage: "url(/images/banner.jpg)",
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto text-center">
        <h1 className="text-blue-950 text-[48px] font-semibold">
          Explore Nossos Cursos
        </h1>
        <p className="text-sm text-gray-600">Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default HomeBanner;
