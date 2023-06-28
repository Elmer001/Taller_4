import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'




const solutions = [
  { name: "Playlist", href: "#" },
  { name: "Playlist", href: "#" },
  { name: "Playlist", href: "#" },
  { name: "Playlist", href: "#" },
  { name: "Playlist", href: "#" },
];

function SongUserPlaylist() {
  return (
    <>
      <div className="flex border-b border-gray-500 hover:bg-gray-800">
        <div className="p-3 w-full flex">
     
            <Popover className="relative flex">
              <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white mr-2">
                <IoIosAddCircle />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-9 px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-md bg-gray-700 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-500"
                        >
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-white"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
         
          Name Song
        </div>
        <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
      </div>
    </>
  );
}
export default SongUserPlaylist;
