import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import SongContainer from "@/components/SongContainer";
import { register } from "@/helpers/functions";
import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get('token')?.value;
};

const isLoggedIn = () => {
  const token = cookies().get('token')?.value;
  const google = cookies().get("next-auth.session-token")?.value;
  if(!token && google) {
    return false;
  }
  return true;
}

export default function Home() {
  const token = getToken();
  let myDate = new Date();
  let hrs = myDate.getHours();

  let greet;

  if (hrs < 12) greet = "Good morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good evening";

  const isLoggedInUser = isLoggedIn();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header token={token} isLoggedInUser={isLoggedInUser}>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">{greet}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          {
            [1,2,3,4,5].map((item) => (
              <ListItem
                image="/images/liked.png"
                name="Liked Songs"
                href="liked"
                key={item}
              />
            ))
          }
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <SongContainer/>
      </div>
    </div>
  );
}