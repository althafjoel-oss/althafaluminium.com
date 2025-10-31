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
          <path fill="#fff" d="M16.1 8.5c-4.2 0-7.6 3.4-7.6 7.6 0 1.3.3 2.6.9 3.7l-1 3.6 3.7-1c1.1.6 2.3.9 3.6.9h.1c4.2 0 7.6-3.4 7.6-7.6-.1-4.2-3.5-7.6-7.7-7.6h-.6zm4.5 10.8c-.2.5-1 1-1.4 1.1-.4.1-.8.1-1.3-.1-.3-.1-.7-.2-1.1-.4-1.9-.8-3.1-2.7-3.2-2.8-.1-.1-.8-1.1-.8-2 0-1 .5-1.5.7-1.7.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.3.2.4.6 1.5.7 1.6.1.1.1.2 0 .4-.1.1-.1.2-.2.3l-.3.3c-.1.1-.2.2-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.3.1.4-.1.1-.1.5-.6.7-.8.1-.2.3-.2.5-.1l1.5.7c.2.1.3.1.4.2.1.3.1.8-.1 1.3z"></path>
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
