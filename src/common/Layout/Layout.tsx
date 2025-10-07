import Container from "./Container"
import Header from "./Header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-8 pb-6">
      <Container>{children}</Container>
    </main>
  </div>
)

export default Layout
