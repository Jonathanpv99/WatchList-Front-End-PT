import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Award, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-blue-800 via-blue-700 to-gray-700 text-white"
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Professional Security Solutions You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              Protecting your business, assets, and people with comprehensive
              security services tailored to your unique needs. Experience peace
              of mind with industry-leading expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <div className="w-full h-64 bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Shield className="h-32 w-32 text-blue-200" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Comprehensive security solutions designed to protect what matters
              most to your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Physical Security
                </h3>
                <p className="text-gray-600 mb-6 text-pretty">
                  Professional security personnel, access control systems, and
                  on-site protection services to safeguard your premises and
                  personnel.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Surveillance Systems
                </h3>
                <p className="text-gray-600 mb-6 text-pretty">
                  Advanced CCTV monitoring, intelligent video analytics, and
                  24/7 surveillance solutions for complete visibility and threat
                  detection.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Cybersecurity Solutions
                </h3>
                <p className="text-gray-600 mb-6 text-pretty">
                  Comprehensive digital protection including network security,
                  threat monitoring, and incident response to secure your
                  digital assets.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Our proven track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Years of Experience
              </div>
              <p className="text-gray-600">
                Decades of expertise in comprehensive security solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Clients Protected
              </div>
              <p className="text-gray-600">
                Businesses trust us with their most valuable assets
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Security Incidents Prevented
              </div>
              <p className="text-gray-600">
                Proactive threat detection and prevention success rate
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
