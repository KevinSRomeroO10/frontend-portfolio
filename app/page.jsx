'use client'

import './page.scss'

import { useRouter } from 'next/navigation'

const Home = () => {
  
  const router = useRouter()

  return (
    <main className='container'>

      <section className="presentation">
        <div className='hs'>
          <h1 className='h1' onClick={() => router.push('/About')}>Hi there!</h1>
          <h1 className='h2' onClick={() => router.push('/About')}>I'm</h1>
          <h1 className='h3' onClick={() => router.push('/About')}>Santiago R.</h1>
        </div>
      </section> 

      <section className='imgIndex'>
        <p>¡Imagen de mi!</p>
      </section>

    </main>
  )

}
export default Home;