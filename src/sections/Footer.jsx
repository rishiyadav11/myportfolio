const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div >
            <a className="social-icon" target="_blank"  href="https://github.com/rishiyadav11">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a></div>
          <div >
            <a className="social-icon" target="_blank" href="https://x.com/RishiYadav5911">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
            </a>
          </div>
          <div >
            <a  className="social-icon" target="_blank"  href="https://www.linkedin.com/in/rishi-yadav-809096279/" >
            <img src="https://imgs.search.brave.com/SQsaFNKXL9x2pacICOrPpnY5c1-Eee1Vf0jOmntInaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" alt="linkdin" className="w-1/2 h-1/2" />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2025 Rishi Yadav. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
