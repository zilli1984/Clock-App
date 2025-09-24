function App() {
  return (
    <>
      <div className="bg-[url('/images/day-sm.png')] min-h-screen bg-cover bg-center bg-no-repeat font-bold text-white px-4 py-8 flex flex-col gap-40 
      md:bg-[url('/images/day-m.png')] md:p-15 md:gap-90 
      lg:bg-[url('/images/day-lg.png')] lg:px-40 lg:gap-70"> 
        <div className="flex justify-between items-start gap-4 max-w-[574px]">
          <div>
            <p className="text-lg font-normal">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
            <p className="mt-3">Ada Lovelace</p>
          </div>
          <button className="mt-2">
            <img src="/images/refresh.svg" alt="refresh" className="w-13 md:w-8 md:h-8"/>
          </button>
        </div>
        <div className="lg:flex lg:justify-between lg:items-end">
          <div>
            <div className="flex justify-start items-center gap-2">
              <img src="/images/sun.svg" alt="refresh" className="w-6" />
              <p className="block md:hidden text-xl font-normal tracking-[4px]">GOOD MORNING</p>
              <p className="hidden md:block text-2xl font-normal tracking-[4px]">GOOD MORNING,IT'S CURRENTLY</p>
            </div>
            <div>
              <p className="text-8xl md:text-[200px] md:mb-6">11:37<span className="text-2xl font-light md:text-5xl">BST</span></p>
              <p className="text-sm mb-16 font-bold tracking-[3px] md:text-2xl md:mb-20 lg:mb-0">IN LONDON, UK</p>
            </div>
          </div>
          <div className="items-end">
            <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-3">
              <span className=" tracking-[5px]">MORE</span>
              <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center transform rotate-90">❯</div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;