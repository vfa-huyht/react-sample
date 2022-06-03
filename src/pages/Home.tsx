import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('welcome')}</h1>
    </>
  )
}
