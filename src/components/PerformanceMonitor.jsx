import { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }

    if (!isVisible) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    measureFPS();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded text-sm z-50">
      <div>FPS: {fps}</div>
      <div className={`text-xs ${fps > 50 ? 'text-green-400' : fps > 30 ? 'text-yellow-400' : 'text-red-400'}`}>
        {fps > 50 ? 'Excellent' : fps > 30 ? 'Good' : 'Poor'}
      </div>
    </div>
  );
};

export default PerformanceMonitor; 