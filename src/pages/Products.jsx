import { useEffect, useState } from "react";
import { fetchProducts, addProduct, deleteProduct } from "../api/api";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting function
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const handleAddProduct = async () => {
    if (!productName) return;
    const newProduct = await addProduct({ name: productName });
    setProducts([...products, newProduct]);
    setProductName("");
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6">
      <Header title="Products" />
      <h1 className="text-2xl font-bold mt-4">Products List</h1>

      {/* Search & Sort Controls */}
      <div className="flex gap-4 my-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Search
        </button>
      </div>

      {/* Add Product */}
      <div className="flex gap-2 my-4">
        <input
          type="text"
          placeholder="New Product Name"
          className="border p-2 w-full"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
};

export default Products;
