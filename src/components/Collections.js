import React from 'react'

const Collections = () => {
    const callouts = [
        {
          name: 'Arts',
          description: 'Paintings and Banner ',
          imageSrc: 'https://i.etsystatic.com/41609589/r/il/668f26/4781724617/il_794xN.4781724617_954g.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Toys',
          description: 'Scale Model',
          imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdP-YKPpfEW3Ma2iq9D6bghKHmpUaEmrpzRJN-E6zRFY2mev4TNITnIFDERlSBIvuwRBD-2FicD1wd-noUJlv612wADXym_Q&usqp=CAY',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: 'Merchandise',
          description: 'TShirts, Caps and many more..',
          imageSrc: 'https://www.cubepartnership.co.uk/wp-content/uploads/2021/03/AMCF1_online_store_launch.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
      ]
      
 
        return (
          <div className="bg-white"  style={{ backgroundImage: "url(" + "" + ")",
          backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
          }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
      
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                  {callouts.map((callout) => (
                    <div key={callout.name} className="group relative">
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a href={callout.href}>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }


export default Collections