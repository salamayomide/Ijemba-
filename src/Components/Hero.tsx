import leader3 from "../assets/leader3.jpg";

export default function Hero() {
  return (
    <div
      className="border h-[75vh] bg-cover bg-no-repeat  flex justify-center items-center  "
      style={{ backgroundImage: `url(${leader3})` }}
    >
      <div className="w-[70%] p-[20px] border flex flex-col items-center">
        <b>
          <h1>Welcome to Ijemba,Iseyin</h1>
        </b>
      </div>
    </div>
  );
}
