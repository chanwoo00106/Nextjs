import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  if (!session) router.push("/");

  return <div>{session.user.name}</div>;
}
