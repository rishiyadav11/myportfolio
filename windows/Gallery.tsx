"use client"
import WindowControl from '@/components/WindowControl'
import { gallery, photosLinks } from '@/constants'
import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';
import React from 'react'

const Gallery = () => {
  return (
<>
    <div id='window-header' className=" w-80 md:w-full">
        <WindowControl target="photos" />
        <div className="flex-1 text-center">
          <h2 className="text-sm font-semibold text-gray-600">Gallery</h2>
          <p className="text-[11px] text-gray-400">Latest captures</p>
        </div>
      </div>

      <div className="window-shell flex">
        <aside className="sidebar hidden md:flex">
          <div>
            <h2>Library</h2>
            <ul>
              {photosLinks.map((libraryItem) => (
                <li key={libraryItem.id}>
                  <img src={libraryItem.icon} alt={libraryItem.title} />
                  <p>{libraryItem.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Albums</h2>
            <ul>
              {["Workshops", "Travel", "Interface Shots", "Sketches"].map(
                (album) => (
                  <li key={album}>
                    <img src="/icons/file.svg" alt={album} />
                    <p>{album}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>

     <div className="gallery p-4">
  <div className="gallery__meta mb-4 flex items-center justify-between">
    <div className="details">
      <p className="text-xs text-gray-500">Featured</p>
      <h3 className="text-lg font-semibold">Recent Highlights</h3>
    </div>
    <button className="px-3 py-1 text-xs dark:bg-gray-600  text-white rounded">
      Start Slideshow
    </button>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 overflow-y-auto max-h-[calc(100vh-200px)] pr-1">
    {gallery.map((shot) => (
      <div
        key={shot.id}
        onClick={() =>
          useWindowStore.getState().openWindow("imgfile", {
            name: ` ${shot.name}`,
            imageUrl: shot.img,
          })
        }
        className="group cursor-pointer rounded-lg overflow-hidden relative"
      >
        <img
          src={shot.img}
          alt=""
          className="w-full h-40 object-cover transition-all duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>
    ))}
  </div>
</div>

      </div>


</>  )
}

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow