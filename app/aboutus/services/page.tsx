/* eslint-disable @next/next/no-img-element */
'use client';

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';

export default function ServicesPage() {
  return (
    <div className="container my-8 grid gap-8 lg:gap-4">
      <Card>
        <CardHeader className="bg-[#413c69]">
          <CardTitle className="text-white font-bold text-2xl">
            Syndicated Research
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 p-0">
          <div className="relative h-[240px] lg:h-auto">
            <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
            <img
              src="https://www.theresearchinsights.com/images/service1.webp"
              alt="about banner"
              className={
                'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
              }
            />
          </div>
          <p className="px-4 py-2 text-xl leading-8">
            Expert Market Insights provides an extensive array of market reports
            across numerous industrial sectors. Our real-time support includes
            meticulous analysis and detailed segmentation at a micro level,
            readily accessible to our clients. We assist our clients in finding
            research that best fits their needs. Additionally, we offer the
            option to customize a syndicated report or create a comprehensive
            custom market research study. Syndicated market research is a
            business service that delivers comprehensive insights into the
            overall market, aiding clients in market strategy and brand
            positioning.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="bg-[#413c69]">
          <CardTitle className="text-white font-bold text-2xl">
            SUBJECT MATTER EXPERTISE ZONE
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 p-0">
          <p className="px-4 py-2 text-xl leading-8">
            We acknowledge the significant impact and positive changes that
            effective consulting can bring to any business. Our consulting and
            advisory services offer a comprehensive, research-based perspective
            crucial for enhancing business intelligence and overcoming market
            challenges. Furthermore, our assistance extends beyond evaluating
            tasks and solutions; we also guide you in anticipating future
            trends. As self-proclaimed Subject Matter Experts, our domain
            specialists adhere to established practices and continually refine
            their skills to offer the best services to both potential and
            existing clients.
          </p>
          <div className="relative h-[240px] lg:h-auto">
            <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
            <img
              src="https://www.theresearchinsights.com/images/service2.webp"
              alt="about banner"
              className={
                'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
              }
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="bg-[#413c69]">
          <CardTitle className="text-white font-bold text-2xl">
            BESPOKE PROPOSALS
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 p-0">
          <div className="relative h-[240px] lg:h-auto">
            <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
            <img
              src="https://www.theresearchinsights.com/images/service3.webp"
              alt="about banner"
              className={
                'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
              }
            />
          </div>
          <p className="px-4 py-2 text-xl leading-8">
            We provide tailor-made and highly adaptable research studies,
            ensuring that you receive information precisely suited to make
            well-informed strategic organizational decisions. At Expert Market
            Insights, we offer fully customized statistical reports aligned with
            clients business objectives through a thorough evaluation of the
            input information. Our elaborate methodologies enable us to deliver
            solutions that are specific to the organization rather than generic
            to the industry. The research procedures we employ undergo rigorous
            analysis and adhere to a strict protocol. Furthermore, to prevent
            information recycling, the reports undergo regular updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}