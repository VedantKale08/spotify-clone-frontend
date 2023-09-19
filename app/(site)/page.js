import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get('token')?.value;
};

export default function Home() {
  const token = getToken();
  let myDate = new Date();
  let hrs = myDate.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header token={token}>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">{greet}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
        </div>
        <div className="">List Of Songs!</div>
      </div>
    </div>
  );
}