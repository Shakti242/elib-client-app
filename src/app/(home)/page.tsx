import { Suspense } from 'react';
import BookList from './components/bookList';
import Banner from './components/banner';
import Loading from '@/components/loading';
export const dynamic = 'force-dynamic';

export default async function Home() {
    return (
        <>
            <Banner />
            <Suspense fallback={<Loading />}>
                <BookList />
            </Suspense>
        </>
    );
}