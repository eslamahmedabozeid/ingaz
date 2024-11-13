import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import FristSection from "./FristSection";
import AboutSection from "./AboutSection";
async function ServerComponent({ locale }: { locale: string }) {
  const session = await auth();
  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <div>
      {" "}
      <FristSection t={t}/>
      <AboutSection t={t}/>
    </div>
  );
}

export default ServerComponent;
