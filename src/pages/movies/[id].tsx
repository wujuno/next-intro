import Link from "next/link";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.title || <Link href={'/'}>
        <span>홈페이지로 돌아가세요</span>
      </Link>}</h4>
    </div>
  );
}