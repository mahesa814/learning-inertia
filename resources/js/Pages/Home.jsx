import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
  return (
    <div>
        <Head title="What's Happening" />
        home
    </div>
  )
}

Home.layout = page => <App children={page}/>
