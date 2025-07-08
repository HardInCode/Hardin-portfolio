// ============================================================================
// BUTTON COMPONENT - Call-to-Action Button
// ============================================================================
// Reusable button component with smooth scroll functionality and hover effects
// Used in Hero section to scroll to About section, and potentially other places
// Features: Smooth scrolling, hover animations, customizable styling

/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        // Prevent default link behavior (instant jump)
        e.preventDefault(); // Stop the link from jumping instantly

        // Find the target section by ID (usually "counter" for About section)
        const target = document.getElementById("counter"); // Find the section with ID "counter"

        // Only scroll if we found the section and an ID is passed in
        // This prevents the contact button from scrolling to the top
        if (target && id) {
          // Calculate offset to leave some space at the top (15% of viewport height)
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate the exact scroll position needed
          // getBoundingClientRect().top gives position relative to viewport
          // pageYOffset gives current scroll position
          // Subtract offset to leave space at top
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Perform smooth scroll to calculated position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      // Apply custom classes + base cta-wrapper class for styling
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      {/* Button container with hover group effects */}
      <div className="cta-button group">
        {/* Animated background circle that expands on hover */}
        <div className="bg-circle" />
        
        {/* Button text */}
        <p className="text">{text}</p>
        
        {/* Arrow icon container with bounce animation */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
