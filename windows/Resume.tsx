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
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1025px)" });

  const scale = isMobile ? 0.6 : isTablet ? 0.7 : 0.95;

  return (
    <div className="flex h-full flex-col max-sm:overflow-hidden">
      <div
        id="window-header"
        className="flex items-center justify-between gap-4 sticky top-0 z-10"
      >
        <WindowControl target="resume" />
        <h2 className="text-sm font-semibold">Resume.pdf</h2>
        <a href="files/resume.pdf" download className="cursor-pointer" title="Download Resume">
          <Download className="icon" />
        </a>
      </div>

      <div className="flex-1 overflow-auto p-4 flex justify-center bg-gray-50 max-sm:bg-transparent">
        <Document file="files/resume.pdf" loading={<p>Loading Resume...</p>}>
          <Page pageNumber={1} scale={scale} renderAnnotationLayer renderTextLayer />
        </Document>
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume")

export default ResumeWindow