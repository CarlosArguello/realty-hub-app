import Header from "./Header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen">
    <Header />
    <main className="max-w-9/12 mx-auto px-4 pt-8 pb-6">{children}</main>
  </div>
)

export default Layout
