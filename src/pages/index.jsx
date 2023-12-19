const LeadGenerationCompany = dynamic(() => import('@/components/lead-generation'), { ssr: false })
import GlobalStyles from "@/core/components/styles/Global";
import dynamic from 'next/dynamic'

export default function Home() {
    return (
        <>
          <GlobalStyles/>
          <LeadGenerationCompany/>
        </>
    );
}

