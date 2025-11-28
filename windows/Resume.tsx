"use client"
import WindowControl from '@/components/WindowControl'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Download } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'

// 💡 FIX: Re-add the necessary CSS imports for the layers.
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
// The rest of your imports...

// Dynamically import the PDF components with SSR disabled.
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
)
const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
)

// Set the worker source client-side
if (typeof window !== 'undefined') {
  import('react-pdf').then(({ pdfjs }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url,
    ).toString()
  })
}

const Resume = () => {
// ... (rest of your component logic remains the same)
  // Detect screen sizes
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' }) // sm
  const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' }) // md
  const isPC = useMediaQuery({ query: '(min-width: 1025px)' }) // lg+

  // Set scale based on screen size
  const scale = isMobile ? 0.5 : isTablet ? 0.6 : 0.9

  return (
    <>
      <div id='window-header' className="flex items-center justify-between">
        <WindowControl target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className='cursor-pointer'
          title='Download Resume'
        >
          <Download className='icon'/>
        </a>
      </div>

      <div className="flex justify-center p-4">
        <Document
          file="files/resume.pdf"
          loading={<p>Loading Resume...</p>}
        >
          <Page
            pageNumber={1}
            scale={scale}
            renderAnnotationLayer // You are using this prop
            renderTextLayer     // You are using this prop
          />
        </Document>
      </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume")

export default ResumeWindow