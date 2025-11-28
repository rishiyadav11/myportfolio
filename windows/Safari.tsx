"use client"
import WindowControl from '@/components/WindowControl'
import { blogPosts } from '@/constants'
import WindowWrapper from '@/hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    <>
        <div id="window-header">
        <WindowControl target="safari" />
        <PanelLeft className='ml-10 icon'/> 
        <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className='icon'/>
            <ChevronRight className='icon'/>
        </div>
        <div className="flex-1 flex-center gap-3">
            <ShieldHalf className='icon'/>
            <div className="search">
                <Search className='icon'/>
                <input type="text" placeholder='Search or enter the website name ' className='flex-1' />
            </div>
        </div>

        <div className="flex items-center gap-5">
            <Share className='icon'/>
            <Plus className='icon'/>
            <Copy className='icon'/>
        </div>
      </div>

      <div className="blog">
        <h2>My developer Blog</h2>
        <div className="space-y-8">
            {
                blogPosts.map(({title, image, date, link}) => (
                    <div key={title} className="blog-post">
                       <div className="col-span-2">
                        <img src={image} alt="" />
                       </div>
                       <div className="content">
                        <p>{date}</p>
                        <h3>{title}</h3>
                        <a href={link} target='_blank' rel='noreferrer'>Read More</a>
                       </div>
                        
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}


const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow