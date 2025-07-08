import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Terms & Conditions - Left aligned */}
        <div className="flex items-center justify-start">
          <p className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
            Terms & Conditions
          </p>
        </div>

        {/* Social media links - Center aligned */}
        <div className="socials flex items-center justify-center gap-6">
          {socialImgs.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <img 
                src={social.imgPath} 
                alt={`${social.name} icon`}
                className="w-8 h-8 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Copyright - Right aligned */}
        <div className="flex items-center justify-end">
          <p className="text-sm text-gray-400 text-right">
            © {new Date().getFullYear()} Hardin Irfan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;