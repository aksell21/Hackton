<<<<<<< HEAD
import Buttons from "../components/buttons/Buttons";
import Header, { HeaderLoged } from "../components/header/Header";
import Calendar from "../components/mainPageCalendar/Calendar";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <HeaderLoged />
      <Calendar />
      <Link href="/registration">
        <Buttons> Adicionar Cliente</Buttons>
      </Link>
=======
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
>>>>>>> 1b259c2d181f8a6601b3f01de842f393d3819afd
    </div>
  );
}