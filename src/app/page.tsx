import { redirect } from "next/navigation";

// check if logged in

export default function Page() {
  // call api that returns list of notes here

  const isLoggedIn = true; // api call for this
  const userUID = ""; // api call for this too
  if (isLoggedIn){
    redirect(`/dashboard/${userUID}`);
  }

  // render login page
  return (
    <div className="">
      <main className="">
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
