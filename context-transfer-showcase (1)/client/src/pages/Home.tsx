import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Zap, GitBranch, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Minimalist Data Flow (Swiss Style)
 * - Extreme whitespace and breathing room
 * - Monochromatic base with electric blue (#0066FF) accents
 * - Grid-based alignment with asymmetric content placement
 * - Typography as primary visual element
 * - Smooth scroll-triggered animations
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Memory Seed
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#download" className="text-sm hover:text-primary transition-colors">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/HiPp2zhG67fK08qOZnDrQf/sandbox/AHItGBtnNWELDISFzzOkzn-img-1_1771780049000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGlQcDJ6aEc2N2ZLMDhxT1puRHJRZi9zYW5kYm94L0FISXRHQnRuTldFTERJU0Z6ek9rem4taW1nLTFfMTc3MTc4MDA0OTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=plwGOcfKIbuvdkdEym5zWT4O3BYB9YYhVEw-Ml7SyvRHhcAzdrKg-q3VNSomMy4JHxO8a~zyigpIUqijabQgdhgKr9Bo77TtaGk4R34OfT-uuLe56JP~pPZmje9z5rhy-ZURhA1Uq6~sTPe4eqD3X3JjruycBjPZRCJJ6m3YSuBdiPuT60UesvCStgOVR9TBmGUZedIzzbOfdZcu9ZEN9b~Yh7iDMcIqhx4CLFGP3ttHql~jhJSlBJGInyWgObF2YdmJkkAgDwCljqc33Pdmf-Ul9kHmK2xiAHXcjFOLVBcisx0yuS6UG3sY7unHBm7EARN~bycPjq6fhkFoBF0mSg__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transfer Context Between LLMs Seamlessly
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Extract, compress, and transfer chat history into a reusable context prompt. Continue conversations with any LLM without losing critical context or nuance.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white gap-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/MemorySeed-Extension.zip';
                  link.download = 'MemorySeed-Extension.zip';
                  link.click();
                }}
              >
                <Download className="w-4 h-4" />
                Download Extension
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section id="how-it-works" className="py-24 bg-white border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">How It Works</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Four simple steps to extract, clean, compress, and transfer your chat context to any LLM.
          </p>

          {/* Data Flow Diagram */}
          <div className="flex justify-center mb-20">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/HiPp2zhG67fK08qOZnDrQf/sandbox/AHItGBtnNWELDISFzzOkzn-img-2_1771780042000_na1fn_ZGF0YS1mbG93LWRpYWdyYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGlQcDJ6aEc2N2ZLMDhxT1puRHJRZi9zYW5kYm94L0FISXRHQnRuTldFTERJU0Z6ek9rem4taW1nLTJfMTc3MTc4MDA0MjAwMF9uYTFmbl9aR0YwWVMxbWJHOTNMV1JwWVdkeVlXMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aD7Hmsi8VwX4TqZ5XzHYbjPqVSAj--j6G~KdHEB2-DhI1DHW45~LZnMcaZ8eUyNUGfcjWXYgTBJ5kapA~3DJ7XSNdWc9sb9Y27yzkl9aMMUcHSGOPrSXES-LCT~VG~KrsSNEG1HIPM20VM9oUVchZPFZ7UvebUK10c1AfHEvNaf6IpVS9rtKvCNMU29FbaTUiYNNIl-UHu8yjHQRfNS3sWm6cayoq9HDaegJVHoET0uJ0vok05f-FQurK7iB3bTdRlngGcsElY83Qkz3MTL1iyCu6mSfRr-HOS07KnJuZP6nXEJRxMxXHbNUK2npNZwsVZUpBk2blPCOhQBaAn93hg__"
              alt="Data Flow Diagram"
              className="max-w-md h-auto"
            />
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Extract Full Chat Text</h3>
                  <p className="text-gray-600">
                    The extension uses DOM scraping to collect all message nodes from ChatGPT or Claude. Messages are separated by role (user, assistant, system) and structured as JSON.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clean & Structure Data</h3>
                  <p className="text-gray-600">
                    Messages are normalized and structured into a consistent format. Metadata like timestamps and user preferences are extracted and organized.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compress Intelligently</h3>
                  <p className="text-gray-600">
                    An LLM analyzes the conversation to extract user identity, preferences, goals, technical context, and unresolved problems—preserving 85-95% of usable context.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Output Transfer Prompt</h3>
                  <p className="text-gray-600">
                    Generate a structured system prompt that another LLM can use to continue the conversation seamlessly without losing critical context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Key Features</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Everything you need to transfer context between LLMs without losing critical information.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">One-Click Extraction</h3>
              <p className="text-gray-600">
                Extract entire chat history with a single click. No manual copying or formatting required.
              </p>
            </Card>

            <Card className="p-8 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Multi-LLM Support</h3>
              <p className="text-gray-600">
                Works with ChatGPT, Claude, and other LLM interfaces. Transfer context between any models.
              </p>
            </Card>

            <Card className="p-8 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Intelligent Compression</h3>
              <p className="text-gray-600">
                LLM-powered analysis extracts key context while preserving 85-95% of usable information.
              </p>
            </Card>
          </div>

          {/* Feature Extraction Visualization */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Smart Message Extraction</h3>
              <p className="text-gray-600 mb-4">
                The extension intelligently identifies and extracts all message types from your chat interface. It separates user queries, assistant responses, and system messages into a structured format.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Automatic role detection (user, assistant, system)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Preserves message order and context</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Handles code blocks and formatting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Cleans and normalizes text</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/HiPp2zhG67fK08qOZnDrQf/sandbox/AHItGBtnNWELDISFzzOkzn-img-3_1771780046000_na1fn_ZmVhdHVyZS1leHRyYWN0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGlQcDJ6aEc2N2ZLMDhxT1puRHJRZi9zYW5kYm94L0FISXRHQnRuTldFTERJU0Z6ek9rem4taW1nLTNfMTc3MTc4MDA0NjAwMF9uYTFmbl9abVZoZEhWeVpTMWxlSFJ5WVdOMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Um7bdRJwLg~JOrEZV3wilwti4OHdLSHAz-6IwiiDvD2d6c-k43HQB42a-wZpPytK7QcDXSog3QdQHEhSt0MM~X3d8X4az11wScQOWyUSWLizFUrUZhffb92R6YzaQfUre4YB3ub90~Pp0r~CfOC3fYRSGIAIo~~SQOq6ZuT9EN2Gf4w-A6YLL21ApVfoMtCuapE5qbm-PDmdJeHJYeE3d1u-m~-K6TBML-NV6K46R78hUH71ZIYbegggFl2n~xOzw~zzIEhSjGfGskb~J7lWixvfEQPJ1Md0vxwvvbEX4NJ6ZbSs67Jgs3O9Uzqu7jnUrG~-D~xB8T9m4U6jPPaFvA__"
                alt="Feature Extraction"
                className="max-w-md h-auto"
              />
            </div>
          </div>

          {/* Context Transfer Visualization */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/HiPp2zhG67fK08qOZnDrQf/sandbox/AHItGBtnNWELDISFzzOkzn-img-4_1771780051000_na1fn_Y29udGV4dC10cmFuc2Zlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGlQcDJ6aEc2N2ZLMDhxT1puRHJRZi9zYW5kYm94L0FISXRHQnRuTldFTERJU0Z6ek9rem4taW1nLTRfMTc3MTc4MDA1MTAwMF9uYTFmbl9ZMjl1ZEdWNGRDMTBjbUZ1YzJabGNnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Uwb56xpjqNdkUzbH03ItRRGpqmwA9SlSLqjPtYxEtw6ENJjWw8EF~~poyR4LR0~MKCGOdkGWKDSvmI1JtNwUczP84E0b61rcaoFMprqa73jiQf~Yhy8iS8uwY0ghA5aCV-UJrpN1luMfg3qaUBW6PJ0DaYpEz9vLXKxgGPa-b2jhtQ__"
                alt="Context Transfer"
                className="max-w-md h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Seamless LLM-to-LLM Transfer</h3>
              <p className="text-gray-600 mb-4">
                Transfer your conversation context between different LLMs without losing critical information. The extension generates a structured system prompt that preserves your conversation state, user preferences, and ongoing projects.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Extracts user identity and preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Preserves technical context and decisions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Identifies unresolved problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Generates reusable system prompts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-white border-t border-border">
        <div className="container max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transfer Context?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Download the Memory Seed Extension and start extracting, compressing, and transferring chat context today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/MemorySeed-Extension.zip';
                link.download = 'MemorySeed-Extension.zip';
                link.click();
              }}
            >
              <Download className="w-4 h-4" />
              Download Extension
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2026 Memory Seed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
