import bg from "@/assets/bg.gif";

export const Background = () => {
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center fixed top-0 left-0 -z-10"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    />
  );
};
