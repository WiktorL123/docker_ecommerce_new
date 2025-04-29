import React, { useEffect, useState } from "react";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:3002/orders");
                const json = await response.json();
                if (!response.ok) {
                    throw new Error(`error: ${json.error}`);
                }
                setOrders([json]); // zakładam, że to jeden obiekt, np. {status: 'connected', result: 'OK'}
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

    return (
        <div className="product-list">
            {orders.map((order, index) => (
                <div key={index} className="product-item">
                    {Object.entries(order).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key}:</strong> {value}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
}
