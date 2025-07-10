import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "menu": {
        "cart": "Cart",
        "add-product": "Add product",
        "giftcards": "Gift cards",
        "settings": "Settings"
      },
      "cart": {
        "cart-has": "In cart there is",
        "items": "item(s)",
        "empty-button": "Empty cart",
        "empty-message": "Cart is empty"
      }
    }
  },
  et: {
    translation: {
      "menu": {
        "cart": "Ostukorv",
        "add-product": "Lisa toode",
        "giftcards": "Kinkekaardid",
        "settings": "Seaded"
      },
      "cart": {
        "cart-has": "Ostukorvis on",
        "items": "ese(t)",
        "empty-button": "Tühjenda ostukorv",
        "empty-message": "Ostukorv on tühi"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("keel") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;