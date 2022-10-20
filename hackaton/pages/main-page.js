import Header from "../components/header/Header";
import Calendar from "../components/mainPageCalendar/Calendar"
import Buttons from "../components/buttons/Buttons";
import Link from "next/link";

export default function calendar() {

  return (
    <div>
      <Header />
      <Calendar />
      <Link href="/registration"><Buttons>Criar conta de Cliente</Buttons></Link>
    </div>
  );
}