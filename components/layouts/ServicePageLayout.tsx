import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  heroImage?: string;
  benefits: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  process: {
    title: string;
    description: string;
    step: number;
  }[];
  caseStudies: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
    }[];
    image?: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
  children?: React.ReactNode;
}

export function ServicePageLayout({
  title,
  description,
  heroImage,
  benefits,
  process,
  caseStudies,
  ctaTitle,
  ctaDescription,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                {title}
              </h1>
              <p className="text-lg text-gray-600 max-w-[600px]">
                {description}
              </p>
              <div className="flex gap-4 mt-2">
                <Button size="lg">Book Demo</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-white/50">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <PlaceholderImage text="Hero Image" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              Discover how our solution can transform your business
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="p-3 bg-orange-50 rounded-lg w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              Our streamlined process ensures successful implementation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-4 p-6 bg-white rounded-xl"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-xl font-bold text-[#FF6B00]">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              See how our clients achieved remarkable results
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <div className="h-48 w-full bg-gray-100">
                  {study.image ? (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <PlaceholderImage
                      text="Case Study Image"
                      className="rounded-none"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-[#FF6B00]">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Content Section */}
      {children}
    </div>
  );
}
