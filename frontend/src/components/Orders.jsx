import React, { useEffect, useState } from "react";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:3000/orders");
                const json = await response.json();
                if (!response.ok) {
                    throw new Error(`error: ${json.error}`);
                }
                setOrders(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (orders.length === 0) return <p>brak zamowien</p>

    return (
        <div className="product-list">
            {orders.map((order) => (
                <div key={order.id}>id zamowienia {order.productId} : zamowienie nr{order.quantity}</div>
            ))}
        </div>
    );
}
