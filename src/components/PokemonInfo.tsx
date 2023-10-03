import { Fragment, useRef, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import PokemonTab from "./PokemonTab";
import PokemonTable from "./PokemonTable";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonCard: PokemonCardType | undefined;
};
export default function PokemonInfo({ open, setOpen, pokemonCard }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div
                  className={`${pokemonCard?.bgColor} px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}
                >
                  <div className="flex flex-col items-center">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div> */}
                    <div className="mt-3 py-14 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl text-center font-extrabold leading-6 text-white mb-6 capitalize"
                      >
                        {pokemonCard?.name}
                      </Dialog.Title>
                      <div className="mt-2 flex gap-4 justify-center">
                        {pokemonCard?.types?.map((type) => (
                          <span
                            key={type.slot}
                            className="capitalize bg-gray-300 text-white rounded-2xl py-1 px-2"
                          >
                            {type.type.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex-col justify-start">
                  <PokemonTab
                    key={pokemonCard?.id}
                    category={pokemonCard?.info}
                  />
                  <PokemonTable pokemonInfo={pokemonCard?.info}/>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
