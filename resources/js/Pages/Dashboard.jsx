import App from '@/Layouts/App';
import { Head } from '@inertiajs/react';
import { Children } from 'react';

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <App children={page}/>
