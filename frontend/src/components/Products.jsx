import React from "react";
import {useState, useEffect} from "react";

export default function Products(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3001/products");
                const json = await response.json();
                if (!response.ok) {
                    throw  new Error(`error: ${json.error}`);
                }
                setProducts(json)
            }
            catch(err) {
                setError(err);

            }
            finally {
                setLoading(false);
            }

        }
        fetchProducts();
    }, [])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="product-list">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="product-item">
                    {product.name}
                </div>
            ))}
        </div>
    )
}