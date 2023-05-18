import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'




const AddGroup = ({setName, setDesc, handleAdd, name, desc , isOpen, closeModal}: 
  {setName: any, setDesc: any, handleAdd: any,
     name: string, desc: string, isOpen: boolean, closeModal: any}) => {
    
  return (
         <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto " >
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl addBox 
                  text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    New Channel
                  </Dialog.Title> */}
                  <p className='addText'>New Channel</p>
                  <input type="text" className='addInput' value={name} 
                  placeholder='Channel name' onChange={(e) => setName(e.target.value)}/>
                  <textarea cols={20} rows={7} className='addInput2' value={desc} 
                  placeholder='Channel Description' onChange={(e) => setDesc(e.target.value)}></textarea>
                  <div className='addBtn' onClick={handleAdd}>Save</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddGroup;


