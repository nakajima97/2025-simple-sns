import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">ログイン</Link>
        </li>
        <li>
          <Link href="/signup">アカウント作成</Link>
        </li>
      </ul>
    </div>
  );
}
