
export async function getServerSideProps() {
  return { redirect: { permanent: false, destination: "/api/redirect" } }
}

export default function Home() {
  return <div>Redirecting</div>
}
