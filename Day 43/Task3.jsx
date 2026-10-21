import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
  {
    id: 5,
    name: "Camera",
    price: 8999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 999,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
];

function Products() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <section className="bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Products
            </h2>
            <p className="mt-2 text-gray-600">
              Discover products you'll love.
            </p>
          </div>

          <p className="rounded-lg bg-white px-4 py-3 font-semibold shadow">
            🛒 Cart: {cart.length}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <p className="mt-2 text-amber-500">
                  ★★★★★{" "}
                  <span className="text-sm text-gray-600">
                    {product.rating} / 5
                  </span>
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
