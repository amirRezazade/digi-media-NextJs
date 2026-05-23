export default async function page({ params }) {
  const { seriesId } = await params;
  console.log(seriesId);

  return <h1>dd</h1>;
}
