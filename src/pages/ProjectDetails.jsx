import { useState, useEffect   } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../constants/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Scrolls to top whenever the project ID changes
  
  // State to manage the currently open image in the modal
  const [modalImageSrc, setModalImageSrc] = useState(null);

  // Function to open the modal with a specific image
  const openModal = (src) => {
    setModalImageSrc(src);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImageSrc(null);
  };

  // Function to parse markdown-like text to HTML
  const parseText = (text) => {
    if (!text) return "";
    let parsed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    parsed = parsed.replace(/\*(.*?)\*/g, '<em>$1</em>');
    parsed = parsed.replace(/\n/g, '<br>');
    return parsed;
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black font-[Mona_Sans]">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link 
          to="/all-projects" 
          className="text-white-50 hover:text-white transition-colors duration-300"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const mainImageSrc = project.imageGallery ? project.imageGallery[0].src : (project.images ? project.images[0] : project.image);

  return (
    <>
      <div className="min-h-screen bg-black text-white pt-32 pb-20 font-[Mona_Sans]">
        <div className="max-w-5xl mx-auto padding-x">
          {/* Navigation */}
          <Link 
            to="/all-projects" 
            className="text-white-50 hover:text-white transition-colors duration-300 mb-8 inline-flex items-center gap-2 text-sm group"
          >
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="hero-badge">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{project.title}</h1>
            <p className="text-white-50 text-lg leading-relaxed max-w-3xl">{project.description}</p>
          </div>

          {/* Technologies Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="enhanced-card-border px-4 py-2 rounded-lg text-sm font-medium text-white-50 hover:bg-black-200 hover:scale-105 transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Images Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white">Project Gallery</h2>
            
            {/* Main Featured Image */}
            <div className="enhanced-card-border rounded-xl p-6 mb-8 hover:border-white-50 transition-all duration-300 group enhanced-card">
              <div 
                onClick={() => openModal(mainImageSrc)} 
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={mainImageSrc}
                  alt={`${project.title} - Main View`} 
                  className="w-full max-h-[500px] object-contain bg-gray-900 rounded-lg shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="border-t border-black-50 pt-4">
                <h3 className="text-lg font-medium text-white mb-2">{project.imageGallery ? project.imageGallery[0].title : "Main Project View"}</h3>
                <p className="text-white-50 text-sm leading-relaxed">{project.imageGallery ? project.imageGallery[0].description : "Primary overview of the project interface and functionality."}</p>
              </div>
            </div>

            {/* Additional Images with Explanations */}
            {((project.imageGallery && project.imageGallery.length > 1) || 
              (project.images && project.images.length > 1) || 
              (project.screenshots && project.screenshots.length > 0)) && (
              <div>
                <h3 className="text-xl font-medium mb-6 text-white-50">Detailed Views</h3>
                <div className="space-y-8">
                  {/* Show additional images from imageGallery array */}
                  {project.imageGallery && project.imageGallery.slice(1).map((imageData, idx) => (
                    <div key={`gallery-${idx}`} className="enhanced-card-border rounded-xl p-6 hover:border-white-50 transition-all duration-300 group enhanced-card">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div className="order-2 lg:order-1">
                          <h4 className="text-lg font-medium text-white mb-3">{imageData.title}</h4>
                          <div className="text-white-50 leading-relaxed text-sm mb-4" dangerouslySetInnerHTML={{ __html: parseText(imageData.description) }} />
                          {imageData.features && imageData.features.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-white mb-2">Key Features:</h5>
                              <ul className="text-white-50 text-sm space-y-1">
                                {imageData.features.map((feature, featureIdx) => (
                                  <li key={featureIdx} className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span dangerouslySetInnerHTML={{ __html: parseText(feature) }} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="order-1 lg:order-2">
                          <div 
                            onClick={() => openModal(imageData.src)}
                            className="overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                          >
                            <img src={imageData.src} alt={imageData.title} className="w-full max-h-[350px] object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Fallback for old format - show additional images from images array */}
                  {!project.imageGallery && project.images && project.images.slice(1).map((src, idx) => (
                    <div key={`img-${idx}`} className="enhanced-card-border rounded-xl p-6 hover:border-white-50 transition-all duration-300 group enhanced-card">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div className="order-2 lg:order-1">
                          <h4 className="text-lg font-medium text-white mb-3">View {idx + 2}</h4>
                          <p className="text-white-50 leading-relaxed text-sm">Additional view showcasing different aspects and features of the project.</p>
                        </div>
                        <div className="order-1 lg:order-2">
                          <div 
                            onClick={() => openModal(src)}
                            className="overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                          >
                            <img src={src} alt={`${project.title} - View ${idx + 2}`} className="w-full max-h-[300px] object-contain rounded-lg group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Show screenshots if no images array or as additional images */}
                  {!project.imageGallery && project.screenshots && project.screenshots
                    .filter(src => !project.images || !project.images.includes(src))
                    .map((src, idx) => (
                    <div key={`screenshot-${idx}`} className="enhanced-card-border rounded-xl p-6 hover:border-white-50 transition-all duration-300 group enhanced-card">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div className="order-2 lg:order-1">
                          <h4 className="text-lg font-medium text-white mb-3">Screenshot {idx + 1}</h4>
                          <p className="text-white-50 leading-relaxed text-sm">Additional screenshot demonstrating the project's functionality and user interface.</p>
                        </div>
                        <div className="order-1 lg:order-2">
                          <div 
                            onClick={() => openModal(src)}
                            className="overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                          >
                            <img src={src} alt={`${project.title} - Screenshot ${idx + 1}`} className="w-full max-h-[300px] object-contain rounded-lg group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white">Documentation</h2>
            <div className="enhanced-card-border rounded-xl p-8 hover:border-white-50 transition-all duration-300 enhanced-card">
              <div className="prose prose-invert max-w-none">
                {project.details ? (
                  <div className="space-y-6">
                    {project.details.split('\n\n').map((paragraph, idx) => (
                      <p 
                        key={idx} 
                        className="text-white-50 leading-relaxed text-base"
                        dangerouslySetInnerHTML={{ __html: parseText(paragraph) }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-white-50 mb-4 opacity-50">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-white-50">Detailed documentation for this project is coming soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black-200 hover:bg-white text-white hover:text-[#afa9d3] px-6 py-4 rounded-lg font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 enhanced-card-border hover:border-white group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black-200 hover:bg-white enhanced-card-border hover:border-white text-white hover:text-[#afa9d3] px-6 py-4 rounded-lg font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}

            {project.report && (
              <a href={project.report} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black-200 hover:bg-white text-white hover:text-[#afa9d3] px-6 py-4 rounded-lg font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 enhanced-card-border hover:border-white group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                See Report
              </a>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-black-50">
            <p className="text-white-50 text-sm text-center">
              This project documentation is part of my portfolio. 
              {project.github && " Source code is available on GitHub."}
              {project.report && " Additional documentation is available in the project report."}
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {modalImageSrc && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative p-4 bg-black-200 enhanced-card-border rounded-xl shadow-2xl max-w-[90vw] max-h-[90vh] cursor-default"
          >
            <img 
              src={modalImageSrc} 
              alt="Enlarged project view" 
              className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: 'calc(90vh - 2rem)' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;