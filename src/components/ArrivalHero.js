import React from 'react'


const ArrivalHero = () => {
    return (
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The Ultimate Scale Model Car Collection
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new collection will shelter you from the harsh elements of a world that doesn't care
                  if you live or die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://i.pinimg.com/originals/fc/56/c3/fc56c3dd145372a85abff8cd379eae91.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://i.pinimg.com/originals/e2/17/88/e21788fbf2a6817fbd0215e5c1cbe2a0.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://i.ytimg.com/vi/-Ccn5ldbCNY/maxresdefault.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51t1selioqL._AC_UF894,1000_QL80_.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://i.pinimg.com/originals/ab/17/1a/ab171a1416bf6e3d883f0ca33efd3896.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://assets-v2.porsche.com/stories/-/jssmedia/Project/Content-Hub-Tenants/Content-Hub/content-hub-main/hero/mobile/is-this-the-worlds-best-porsche-model-car-collection.jpg?mw=375&h=auto&rev=55c1d770d2b14743812f56c7ddbd2f78"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://exhibits.si.edu/wp-content/uploads/2020/10/IMG_3861-rotated.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )
    }


export default ArrivalHero