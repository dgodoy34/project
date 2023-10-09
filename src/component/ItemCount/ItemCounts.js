import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button className="btn btn-secondary" disabled={count <= 1} onClick={decrease}>
				-
			</button>
			<span>{count}</span>
			<button className="btn btn-secondary" disabled={count >= stock} onClick={increase}>
				+
			</button>
			<div>
				<button className="btn btn-primary" disabled={stock <= 0} onClick={() => onAdd(count)}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
