import { useTranslation } from 'react-i18next';
import Gantt from '../components/Gantt';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Gantt></Gantt>
    </>
  )
}
