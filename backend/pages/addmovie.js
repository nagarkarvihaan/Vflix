import Movie from "../components/Movie.js";
import { useSession } from "next-auth/react/index.js";
import { useRouter } from "next/router.js";
import Loading from "@/components/Loading.js";

export default function Addmovie() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loading />
  }

  if (!session) {
    router.push('/auth');
    return null;
  }

  if (session) {
    return <>
      <div className="addblogpage container">
        <div className="blogsadd">
          <div className="titledashboard w-100 flex flex-sb">
            <div>
              <h2>Add movie</h2>
              <h3>ADMIN PANEL</h3>
            </div>
          </div>
          <Movie />
        </div>
      </div>

    </>
  }

}