import React from 'react'

const LogoClouds = () => {
   
        return (
          <div className="bg-white py-24 sm:py-32" style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/pencil-sketch-texture_1409-1476.jpg?w=2000" + ")",
          backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
          }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                Trusted by the world’s most innovative teams
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_black.svg/891px-Land_Rover_logo_black.svg.png?20210723155746"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://cdn.worldvectorlogo.com/logos/bentley.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/677px-Tata_logo.svg.png?20190613192255"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jeep_logo.svg/1199px-Jeep_logo.svg.png?20190818083944"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/K%26N_Plain_Logo.svg/1200px-K%26N_Plain_Logo.svg.png?20210305083008"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        )
      }


export default LogoClouds