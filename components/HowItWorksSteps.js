import { Fragment } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

/**
 * The numbered step-card UI from the homepage's "How it works" section,
 * extracted so the /convert landing pages can render their own 3-step
 * guides with the exact same look — same component, not a lookalike copy.
 *
 * `description` may contain simple HTML (e.g. <strong>) since the homepage
 * version already relied on that via dangerouslySetInnerHTML.
 */
const HowItWorksSteps = ({ title, steps }) => (
    <section className="mb-20">
        {title && (
            <h3 className="text-2xl font-bold text-indigo-700 text-center mb-8">{title}</h3>
        )}
        <div className="max-w-5xl mx-auto px-1">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_max-content_1fr_max-content_1fr] gap-8">
                {steps.map((step, index) => (
                    <Fragment key={index}>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center relative transition-shadow duration-300 hover:shadow-md">
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                <step.icon className="w-8 h-8" aria-label={`${step.title} icon`} />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
                            <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: step.description }} />
                            {index < steps.length - 1 && (
                                <ArrowDown
                                    className="absolute md:hidden w-5.5 h-5.5 text-indigo-400 bottom-[-1.75rem] left-1/2 transform -translate-x-1/2 z-10"
                                    aria-label="Next Step Arrow"
                                />
                            )}
                        </div>
                        {index < steps.length - 1 && (
                            <div className="hidden md:flex items-center justify-center">
                                <ArrowRight className="w-10 h-10 text-indigo-400" aria-label="Next Step Arrow" />
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorksSteps;
