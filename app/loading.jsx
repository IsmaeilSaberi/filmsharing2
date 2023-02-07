import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <Image width={150} height={150} alt="loading" src={"/loading.gif"} />
    </div>
  );
};

export default Loading;
