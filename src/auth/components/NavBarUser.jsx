import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {useAuth} from '../../auth/hooks/useAuth'
import {logo} from '../../assets/index'

const navigation = [


  { name: 'Home', href: '/', current: true },
  { name: 'Crear Entrada', href: '/crear', current: false },
  { name: 'Mis entradas', href: '/entradasPropias', current: false },
  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const {logOut} =useAuth()
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>  
                      <Menu.Item>
                        {({ active }) => (
                          <button     onClick={logOut}
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}