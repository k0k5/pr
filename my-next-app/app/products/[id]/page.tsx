import { Suspense } from 'react';
import AddToCartButton from './add-to-cart-button';

async function getProduct(id: string) {
    const products: Record<string, { name: string; price: number }> = {
        '1': { name: 'Ноутбук', price: 75000 },
        '2': { name: 'Мышь', price: 1500 },
    };
    return products[id] || null;
}

// Дочерний компонент, который читает params и получает данные
async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return <h1>Товар не найден</h1>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Цена: {product.price} ₽</p>
            <AddToCartButton />
        </div>
    );
}

// Страница оборачивает динамическую часть в Suspense
export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<p>Загрузка товара...</p>}>
            <ProductDetails params={params} />
        </Suspense>
    );
}