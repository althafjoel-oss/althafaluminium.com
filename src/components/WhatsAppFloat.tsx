const WhatsAppFloat = () => {
  return (
    <>
      <a 
        href="https://api.whatsapp.com/send?phone=917358403185&text=Hi,%20I%20want%20a%20quotation%20for%20aluminum%20partitions!" 
        target="_blank" 
        rel="noopener noreferrer"
        className="wa-float-btn" 
        aria-label="Chat on WhatsApp"
      >
        <svg className="wa-icon" viewBox="0 0 32 32" width="50" height="50">
          <circle cx="16" cy="16" r="16" fill="#25D366"></circle>
          <path fill="#fff" d="M22.1 9.9c-.9-.9-2-1.5-3.2-1.7-2.3-.4-4.7.6-6.2 2.6-.3.4-.6.8-.7 1.3-1 2.4.2 5.2 2.7 8.1l-.7 2.1 2.2-.7c2.6 1.4 5.2 2.3 7.2 1.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.3-1.6 1.4-2.6.6-2.7-2.1-6-6.1-8.3zm-2.9 10.4c-.8 0-1.5-.3-2.2-.8-4.5-2.7-7-5.4-6-8.2.2-.6.6-1.1 1.1-1.5C15.8 8.2 17.6 7.7 19.2 8c1.1.2 2.2.8 3 1.6 3.7 2.2 5.9 5.3 5.3 7.4-.2.6-.6 1.1-1.1 1.5-.5.3-1.1.5-1.8.5zm-4.3 2.6a1 1 0 0 1-1.3-1.3l.7-2.1c-2.2-2.6-3.5-4.9-3.6-6.5-.1-.7.2-1.4.9-1.7.7-.3 1.4.2 1.7.9.1.3.5.8.7 1.1.4.5 1 .8 1.6.7.2 0 .4-.2.4-.4 0-.4-.7-.7-1.1-1-1.3-1-2.2-2.2-2.2-3.4 0-.8.3-1.6.7-2.2a.97.97 0 0 1 .7-.3c.6 0 1.1.3 1.3.9.4 1 .9 2-.5 3.2-.4.4-.7 1-.9 1.6.1.1.2.3.3.4.2.3.4.6.6.8.3.3.7.3 1 .1.3-.2.4-.6.3-.9-.1-.4-.1-.9.1-1.2.3-.3.8-.1 1.1.2.2.3.2.6.2.8a1.02 1.02 0 0 1-.3.6c-.4.5-.8 1.1-1.2 1.7zm1.6-9.1c-2.2 0-4 1.8-4 4 0 1 .4 2 .7 2.8.4.7 1 .9 1.4.8.5-.2.6-.9.5-1.5-.1-.5.3-.9.8-.9.4 0 .7.4.7.8 0 .4-.2.8-.6.8-.3 0-.7-.3-.8-.7-.1-.2-.2-.5-.2-.7 0-1.2 1-2.1 2.2-2.1.8 0 1.6.4 2.1 1s.9 1.4.9 2.1c0 .4-.2.8-.5.9-.4.1-.8-.1-.9-.5-.1-.2 0-.5.2-.7.2-.3.7-.3.9 0 .1.2.1.5-.1.7-.2.2-.5.2-.6.1z"></path>
        </svg>
      </a>
      <style>{`
        .wa-float-btn {
          position: fixed;
          right: 20px;
          bottom: 24px;
          z-index: 1100;
          border-radius: 50%;
          box-shadow: 0 0 16px 0 rgba(37,211,102,0.3);
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: box-shadow 0.2s;
        }
        .wa-float-btn:hover {
          box-shadow: 0 0 32px 0 rgba(37,211,102,0.5);
          background: #1EBE55;
        }
        .wa-icon {
          display: block;
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
