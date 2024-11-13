import initTranslations from "@/app/i18n";
import Mapping from "./Mapping";
async function ServerAboutComponent({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <div>
      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container  mx-auto px-4 relative min-h-96">
          <Mapping t={t} />
        </div>
      </div>
    </div>
  );
}

export default ServerAboutComponent;
