const ProductCard = ({ product, onDelete }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>ID: {product.id}</p>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  