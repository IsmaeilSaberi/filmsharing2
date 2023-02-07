import Notfound from "@/app/not-found";
import Image from "next/image";

const getData = async (id) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    caches: "no-store",
  });
  return data.json();
};

const Single = async ({ params }) => {
  const movie = await getData(params.id);

  if (!movie.id) {
    return Notfound();
  }

  return (
    <div className="container mx-auto flex flex-col gap-12 ">
      <section className="rounded-lg bg-gray-100 p-5 flex justify-between items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1>{movie.title}</h1>
            <div>سال ساخت: {movie.year}</div>
            <div>زمان: {movie.released}</div>
            <div>کارگردان: {movie.director}</div>
            <div>نمره آی ام دی بی: {movie.imdb_rating}</div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div>خلاصه فیلم:</div>
              <div>{movie.plot} </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>ژانرها:</div>
              <div className="flex justify-start items-center flex-wrap gap-1">
                {movie.genres.map((gen, i) => (
                  <div key={i} className="bg-gray-300 px-4 py-1 rounded-md">
                    {gen}
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-3xl"
            width={250}
            height={300}
            alt={movie.id}
            src={movie.poster}
            priority={true}
          />
        </div>
      </section>
      <section className="flex justify-around items-center flex-wrap">
        {movie.images.map((img, i) => (
          <Image
            className="rounded-md my-4"
            key={i}
            width={400}
            height={200}
            alt={img}
            src={img}
          />
        ))}
      </section>
    </div>
  );
};

export default Single;
