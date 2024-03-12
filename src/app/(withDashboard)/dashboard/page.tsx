import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To Dashboard Page
          </h1>
          <Image
            src={session?.user?.image}
            height={100}
            width={100}
            alt="image"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
