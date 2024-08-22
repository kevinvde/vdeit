import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Home', href: '#'},
    {name: 'Over mij', href: '#'},
    {name: 'Diensten', href: '#'},
    {name: 'Portfolio', href: '#'},
    {name: 'Prijzen', href: '#'},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl">
                <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                    <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <svg viewBox="0 0 462 396" className={'h-8 w-auto text-blue-400'}>
                                <g clip-path="url(#a)" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M347.964 69.022h-76.278L157.267 267.205l-38.141-66.061L233.545 2.964h228.838L233.545 399.323l-38.14-66.061zM0 0h152.559L76.281 132.118z"
                                        fill="currentColor"/>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path d="M0 0h462v396H0z" fill="#fff"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                        <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href}
                                   className="text-sm font-semibold leading-6 text-gray-900">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <svg viewBox="0 0 462 396" className={'h-8 w-auto text-blue-400'}>
                                <g clip-path="url(#a)" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M347.964 69.022h-76.278L157.267 267.205l-38.141-66.061L233.545 2.964h228.838L233.545 399.323l-38.14-66.061zM0 0h152.559L76.281 132.118z"
                                        fill="currentColor"/>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path d="M0 0h462v396H0z" fill="#fff"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
