import React from "react";

const GoogleTranslateComponent = () => {
//   useEffect(() => {
//     // Hàm khởi tạo Google Translate widget
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: 'vi' },
//         'google_translate_elements'
//       );
//     };
//   }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center">
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
};

export default GoogleTranslateComponent;