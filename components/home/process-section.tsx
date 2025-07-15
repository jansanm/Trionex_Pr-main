"use client"

import { useState } from "react"
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Discovery & Research",
    icon: Search,
    description: "We dive deep into understanding your business goals, target audience, and technical requirements.",
    details: ["Stakeholder interviews", "Market research", "Technical assessment", "Competitive analysis"],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Strategy & Planning",
    icon: Lightbulb,
    description: "Creating a comprehensive roadmap with clear milestones and deliverables.",
    details: ["Project roadmap", "Technology stack selection", "Resource allocation", "Timeline planning"],
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Development & Design",
    icon: Code,
    description: "Building your solution with cutting-edge technologies and best practices.",
    details: ["Agile development", "UI/UX design", "Quality assurance", "Regular updates"],
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Launch & Support",
    icon: Rocket,
    description: "Deploying your solution and providing ongoing support and maintenance.",
    details: ["Deployment strategy", "Performance monitoring", "User training", "Ongoing support"],
    color: "from-orange-400 to-orange-600",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Our Process
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery from concept to launch
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? "transform scale-105" : ""
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-300 shadow-lg"
                      : "bg-white border-amber-100 hover:border-amber-200"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                          Step {step.id}
                        </span>
                        {activeStep === step.id && <CheckCircle className="w-5 h-5 text-green-500" />}
                      </div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2">{step.title}</h3>
                      <p className="text-amber-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div
                className={`w-24 h-24 bg-gradient-to-br ${processSteps[activeStep - 1].color} rounded-3xl flex items-center justify-center mx-auto mb-4`}
              >
                {(() => {
                  const StepIcon = processSteps[activeStep - 1].icon
                  return <StepIcon className="w-12 h-12 text-white" />
                })()}
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">{processSteps[activeStep - 1].title}</h3>
              <p className="text-amber-800">{processSteps[activeStep - 1].description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-amber-900 mb-4">What we deliver:</h4>
              {processSteps[activeStep - 1].details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-amber-800">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
