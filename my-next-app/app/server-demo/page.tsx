import { Suspense } from 'react';
import { connection } from 'next/server';

async function ServerTime() {
    await connection();
    const time = new Date().toISOString();
    console.log('Это сообщение появится в терминале, а не в браузере');
    return <p>Время на сервере: {time}</p>;
}

export default function ServerDemo() {
    return (
        <div>
            <h1>Server Component</h1>
            <Suspense fallback={<p>Загрузка времени...</p>}>
                <ServerTime />
            </Suspense>
        </div>
    );
}