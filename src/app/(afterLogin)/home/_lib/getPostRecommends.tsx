export async function getPostRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ['posts', 'recommends'],
        revalidate: 60, // 60초 뒤에는 데이터 캐쉬가 사라진다.
      },
      // cache: 'no-store', // Next.js 14버전까진 캐싱을 안하려면 no-store를 붙여야 했다.
      // 하지만 Next.js 15버전에선 no-store가 기본값이 되었다.
      // 그래서 오히려 캐싱을 하고 싶다면
      // cache: 'force-cache', // 를 넣어줘야 한다.
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
