import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.type = 'text/javascript';
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    return () => {
      document.body.removeChild(addScript);
    };
  }, []);

  return (
    <div id="google_translate_element" style={{ display: 'none' }}></div>
  );
};

export default GoogleTranslate;
