// Dynamic Page
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>{router.query.id}</div>
  );
}

export default DetailPage;