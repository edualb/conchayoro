import { blackFridayFlag } from './flags';

export default async function Page() {
  const black_friday = await blackFridayFlag();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1> Welcome to the ConchaYOro App - deploy v3 </h1>
        <p> By: Eduardo Albuquerque da Silva </p>
        
        { black_friday ? <button> Promo </button> : <button> Normal </button> }
      </div>
    </main>
  )
}
