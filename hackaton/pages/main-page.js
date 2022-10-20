import Buttons from "../components/buttons/Buttons"
import Header, { HeaderLoged } from "../components/header/Header"
import Calendar from "../components/mainPageCalendar/Calendar"
import Link from "next/link"
export default function HomePage() {
  return (
    <div>
      <HeaderLoged />
      <Calendar />
      <Link href="/registration"><Buttons> Adicionar Cliente</Buttons></Link>
    </div>
  )
}
