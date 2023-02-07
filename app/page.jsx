import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies", {
    cache: "no-store",
  });
  return data.json();
};

const Home = async () => {
  const movies = await getData();

  return (
    <main className="flex flex-col gap-8 container mx-auto">
      <>
        <title>سایت فیلم</title>
        <meta
          name="description"
          content="بهترین سایت حوزه ی سلامتی جسمانی و معنوی"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </>
      <div className="text-center text-2xl text-green-800">صفحه اصلی</div>
      <div className="flex justify-between flex-wrap items-center gap-2">
        {movies.data.map((movie, i) => (
          <Link
            href={`/movies/${movie.id}`}
            key={i}
            className="relative h-[28rem] w-72 border-2 border-blue-400 rounded-2xl p-4 flex flex-col gap-3"
          >
            <div className="flex justify-center items-center">
              <Image
                className="rounded-xl"
                src={movie.poster}
                width={220}
                height={240}
                alt={movie.title}
              />
            </div>
            <h3 className="flex justify-center items-center text-center">
              {movie.title}
            </h3>
            <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center text-black">
              <div className="px-3 py-1 bg-gray-400 rounded-md">
                {movie.year}
              </div>
              <div className="px-3 py-1 bg-gray-400 rounded-md">
                {movie.country}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
