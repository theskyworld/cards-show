export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>NavBar</p>
      {children}
      <p>Footer</p>
    </>
  )
}