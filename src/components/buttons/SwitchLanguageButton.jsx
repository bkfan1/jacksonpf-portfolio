import { Button, Tooltip } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function SwitchLanguageButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Tooltip label={i18n.language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}>
      <Button
        position={"fixed"}
        right={0}
        bottom={0}
        margin={8}
        zIndex={55}
        onClick={() => toggleLanguage()}
        size={"lg"}
      >
        {i18n.language === 'en' ? '🇪🇸 ESP' : '🇺🇸 ENG'}
      </Button>
      </Tooltip>
    </>
  );
}
