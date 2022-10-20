import Header, { HeaderLoged } from "../components/header/Header"
import Calendar from "../components/mainPageCalendar/Calendar"
export default function HomePage() {
  return (
    <div>
      <HeaderLoged />
      <Calendar />
    </div>
  )
}