import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <title>My App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white p-5">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <nav className="space-y-2">
              <a href="/" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</a>
              <a href="/products" className="block px-4 py-2 rounded hover:bg-gray-700">Products</a>
              <a href="/adjustment-transaction" className="block px-4 py-2 rounded hover:bg-gray-700">Adjustment Transaction</a>
            </nav>
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
            {children}
          </main>
        </body>
      </html>
    );
  }