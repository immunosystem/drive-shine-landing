import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, Phone, MapPin, Clock3, ShieldCheck, BadgeCheck, Check, CheckCheck, Wrench, Droplets, Disc3, ScanLine, Settings2, Cog, Wind, Menu, X, Star, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import garageHero from "@/assets/garage-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ТОЧКА — надёжный автосервис в Москве" },
    { name: "description", content: "Ремонт и обслуживание автомобилей в Москве. Диагностика, замена масла, ремонт тормозов и двигателя. Запишитесь в автосервис ТОЧКА." },
    { property: "og:title", content: "ТОЧКА — ваш автомобиль в надёжных руках" },
    { property: "og:description", content: "Профессиональный ремонт, честная стоимость и удобная запись в автосервис в Москве." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const services = [
  { name: "Замена масла", icon: Droplets, description: "Масло, фильтры и всё необходимое для долгой жизни двигателя.", detail: "от 30 минут" },
  { name: "Тормозная система", icon: Disc3, description: "Замена колодок и дисков. Уверенность в каждом торможении.", detail: "от 60 минут" },
  { name: "Компьютерная диагностика", icon: ScanLine, description: "Найдём причину неисправности, а не просто сбросим ошибку.", detail: "от 30 минут" },
  { name: "Ремонт подвески", icon: Settings2, description: "Без стуков и вибраций. Вернём комфорт и управляемость.", detail: "от 90 минут" },
  { name: "Ремонт двигателя", icon: Cog, description: "От небольшого ремонта до капитального восстановления.", detail: "после диагностики" },
  { name: "Обслуживание кондиционера", icon: Wind, description: "Диагностика, заправка и чистка. Свежесть в каждой поездке.", detail: "от 45 минут" },
];
function Brand() {
  return <a href="#" aria-label="ТОЧКА — на главную" className="flex items-center gap-2.5"><Wrench className="brand-symbol" strokeWidth={2.5} /><div><div className="brand-name">ТОЧКА<span className="text-primary">.</span></div><div className="mt-1.5 text-[8px] font-semibold tracking-[2px] text-muted-foreground">НЕЗАВИСИМЫЙ АВТОСЕРВИС</div></div></a>;
}
function Index() {
  const [service, setService] = useState("");
  const [success, setSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [date, setDate] = useState("");
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    // Integration point: new FormData(form) contains all fields for a future POST.
    setSuccess(true);
    form.reset();
    setService("");
    setDate("");
  }
  const nav = [{ href: "#services", label: "Услуги" }, { href: "#about", label: "Почему мы" }, { href: "#contacts", label: "Контакты" }];
  return <div>
    <header className="garage-header border-b border-border bg-background relative z-20">
      <div className="site-container grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:flex md:justify-between">
        <Brand />
        <nav aria-label="Основная навигация" className="hidden items-center gap-8 text-xs font-semibold text-muted-foreground md:flex">{nav.map(item => <a key={item.href} href={item.href} className="transition-colors hover:text-primary">{item.label}</a>)}</nav>
        <div className="hidden items-center gap-6 md:flex"><a href="tel:+74951234567" className="text-sm font-bold">+7 (495) 123-45-67</a><Button asChild variant="garage" size="cta"><a href="#booking">Записаться <ArrowUpRight /></a></Button></div>
        <Button variant="ghost" size="icon" className="md:hidden shrink-0" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav aria-label="Мобильная навигация" className="absolute inset-x-0 top-full grid gap-5 border-b border-border bg-background p-6 shadow-lg md:hidden">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<Button asChild variant="garage"><a href="#booking" onClick={() => setMenuOpen(false)}>Записаться на сервис <ArrowUpRight /></a></Button></nav>}
    </header>

    <main>
      <section className="hero">
        <img src={garageHero} alt="Автомобиль в чистом современном автосервисе" width={1920} height={1024} className="hero-photo" fetchPriority="high" />
        <div className="site-container hero-content reveal">
          <div className="mb-7 flex items-center gap-2.5 text-primary eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> АВТОСЕРВИС В МОСКВЕ</div>
          <h1 className="hero-heading">Ваш автомобиль.<br />В <span className="text-primary">надёжных</span><br />руках.</h1>
          <p className="mt-6 max-w-[440px] text-[15px] leading-7 text-muted-foreground">Профессиональный ремонт без лишних ожиданий.<br className="hidden sm:block" /> Опытные мастера, честные цены и забота о вашем авто.</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Button asChild variant="garage" size="cta"><a href="#booking">Записаться на сервис <ArrowUpRight className="ml-3" /></a></Button><a href="tel:+74951234567" className="flex items-center gap-2.5 px-1 py-3 text-xs font-semibold"><Phone className="size-4 text-primary" /> +7 (495) 123-45-67</a></div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-muted-foreground"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Гарантия на работы</span><span className="flex items-center gap-2"><CheckCheck className="size-4 text-primary" /> Без скрытых платежей</span></div>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-card">
        <div className="site-container grid grid-cols-1 divide-y divide-border py-3 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-7">
          {[{ icon: BadgeCheck, title: "Опытные специалисты", text: "Мастера, которым можно доверять" }, { icon: ShieldCheck, title: "Гарантия на каждый ремонт", text: "Отвечаем за результат нашей работы" }, { icon: CheckCheck, title: "Прозрачная стоимость", text: "Согласуем цену до начала работ" }].map(({ icon: Icon, title, text }, i) => <div key={title} className={`flex items-center gap-4 py-5 md:py-1 ${i ? "md:pl-9" : ""}`}><Icon className="size-8 shrink-0 text-primary" strokeWidth={1.5} /><div className="min-w-0"><h2 className="text-[13px] font-bold">{title}</h2><p className="mt-1.5 text-[11px] text-muted-foreground">{text}</p></div></div>)}
        </div>
      </section>

      <section id="services" className="site-container py-16 md:py-20">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="eyebrow text-primary mb-3">ЗАБОТА О ВАШЕМ АВТО</p><h2 className="section-heading">Всё, что нужно вашему автомобилю</h2><p className="mt-4 text-sm text-muted-foreground">От планового ТО до сложного ремонта — в одном месте.</p></div><span className="hidden pb-1 text-[11px] text-muted-foreground lg:block">01 — УСЛУГИ</span></div>
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ name, icon: Icon, description, detail }) => <article key={name} className="service-card group flex flex-col"><div className="flex items-center justify-between"><div className="service-icon"><Icon className="size-6" strokeWidth={1.6} /></div><span className="text-[10px] text-muted-foreground flex items-center gap-1.5"><Clock3 className="size-3" />{detail}</span></div><h3 className="mt-6 text-[16px] font-bold">{name}</h3><p className="mt-2.5 text-xs leading-6 text-muted-foreground flex-1">{description}</p><a href="#booking" onClick={() => setService(name)} className="mt-6 flex items-center justify-between text-xs font-bold text-primary">Записаться <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></article>)}</div>
      </section>

      <section id="booking" className="border-y border-border bg-secondary/30 py-16 md:py-20">
        <div className="site-container booking-layout">
          <div className="pt-2"><p className="eyebrow text-primary mb-4">БЕЗ ОЧЕРЕДЕЙ И ЛИШНИХ ЗВОНКОВ</p><h2 className="section-heading">Хороший сервис<br />начинается с записи<span className="text-primary">.</span></h2><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Выберите удобное время. Мы перезвоним, уточним детали и подготовимся к вашему приезду.</p><div className="mt-9 space-y-5">{["Согласуем работы и стоимость заранее", "Подберём запчасти для вашего автомобиля", "Сообщим, когда автомобиль будет готов"].map(text => <div key={text} className="flex items-center gap-3 text-xs"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10"><Check className="size-3 text-primary" /></span>{text}</div>)}</div><div className="mt-10 border-t border-border pt-7"><p className="text-xs text-muted-foreground">Нужна помощь с выбором услуги?</p><a href="tel:+74951234567" className="mt-3 flex items-center gap-3 text-xl font-bold"><Phone className="size-5 text-primary" />+7 (495) 123-45-67</a><p className="mt-2 text-[11px] text-muted-foreground">Позвоните — подскажем и запишем.</p></div></div>
          <form method="post" onSubmit={submitBooking} className="booking-form">
            <h3 className="text-xl font-bold">Записаться на сервис</h3><p className="mt-2 text-xs text-muted-foreground">Оставьте заявку — остальное мы возьмём на себя.</p>
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="form-field">Ваше имя<Input name="fullName" autoComplete="name" required placeholder="Иван Петров" className="form-control" /></label>
              <label className="form-field">Номер телефона <span className="sr-only">обязательно</span><Input name="phone" type="tel" autoComplete="tel" required pattern="[+0-9()\s\-]{7,22}" title="Введите номер телефона: от 7 до 22 символов, цифры, пробелы, скобки и знак +" placeholder="+7 (___) ___-__-__" className="form-control" /></label>
              <label className="form-field sm:col-span-2">Марка и модель автомобиля<Input name="carModel" required placeholder="Например, Volkswagen Polo" className="form-control" /></label>
              <label className="form-field sm:col-span-2">Какая услуга нужна?<select name="service" value={service} onChange={e => setService(e.target.value)} required className="form-control"><option value="" disabled>Выберите услугу</option>{services.map(item => <option key={item.name}>{item.name}</option>)}<option>Плановое ТО</option><option>Другое / нужна консультация</option></select></label>
              <label className="form-field">Месяц<select name="preferredMonth" value={month} onChange={e => pickMonth(e.target.value)} required className="form-control"><option value="" disabled>Выберите месяц</option>{MONTHS.map((name, i) => <option key={name} value={i}>{name}</option>)}</select></label>
              <label className="form-field">Число<select name="preferredDay" value={day} onChange={e => setDay(e.target.value)} required disabled={month === ""} className="form-control"><option value="" disabled>{month === "" ? "Сначала месяц" : "Выберите число"}</option>{days.map(d => <option key={d} value={d}>{d}</option>)}</select></label>
              <label className="form-field sm:col-span-2">Удобное время<select name="timeSlot" required defaultValue="" className="form-control"><option value="" disabled>Выберите время</option><option value="morning">Утро · 09:00–12:00</option><option value="afternoon">День · 12:00–17:00</option><option value="evening">Вечер · 17:00–20:00</option></select></label>
            </div>
            <Button type="submit" variant="garage" size="cta" className="mt-6 w-full justify-between">Подтвердить запись <ArrowRight /></Button>
            <p className="mt-4 text-center text-[10px] leading-5 text-muted-foreground">Нажимая кнопку, вы соглашаетесь с <button type="button" className="underline underline-offset-2 hover:text-foreground" onClick={() => setPolicyOpen(true)}>политикой конфиденциальности</button></p>
          </form>
        </div>
      </section>

      <section id="contacts" className="site-container grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:gap-20 md:py-20">
        <div><p className="eyebrow text-primary mb-3">ВСЕГДА РЯДОМ</p><h2 className="section-heading">Заезжайте. Будем рады.</h2><div className="mt-7 space-y-5"><div className="flex gap-4"><MapPin className="size-5 text-primary shrink-0" /><div><p className="text-sm font-semibold">Москва, ул. Автомобильная, 12</p><p className="mt-1.5 text-xs text-muted-foreground">Удобный подъезд и парковка для клиентов</p></div></div><div className="flex gap-4"><Clock3 className="size-5 text-primary shrink-0" /><div><p className="text-sm font-semibold">Ежедневно · 09:00–20:00</p><p className="mt-1.5 text-xs text-muted-foreground">Работаем без выходных</p></div></div><a href="tel:+74951234567" className="flex items-center gap-4 text-sm font-semibold"><Phone className="size-5 text-primary" />+7 (495) 123-45-67 <ArrowUpRight className="size-4 text-muted-foreground" /></a></div></div>
        <div className="map-placeholder flex flex-col items-center justify-center gap-3" aria-label="Место для карты Google"><MapPin className="size-10 text-primary relative z-10" fill="currentColor" stroke="var(--background)" /><div className="map-label text-center"><p className="font-bold text-sm">ТОЧКА<span className="text-primary">.</span> автосервис</p><p className="mt-1 text-[11px] text-muted-foreground">Москва, ул. Автомобильная, 12</p></div><span className="absolute bottom-3 left-4 z-10 text-[10px] text-muted-foreground">Google Карты · место для карты</span></div>
      </section>
    </main>

    <footer className="border-t border-border"><div className="site-container grid gap-6 py-8 md:grid-cols-[1fr_auto] md:items-center"><div className="flex flex-wrap items-center gap-6"><Brand /><span className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} ТОЧКА. Все права защищены.</span></div><Button variant="link" className="justify-start p-0 text-[10px] text-muted-foreground" onClick={() => setPolicyOpen(true)}>Политика конфиденциальности <ArrowUpRight className="size-3" /></Button></div></footer>

    <Dialog open={success} onOpenChange={setSuccess}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-md rounded-lg p-8 text-center"><div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10"><CheckCheck className="size-8 text-primary" /></div><DialogTitle className="text-2xl">Спасибо за вашу заявку!</DialogTitle><DialogDescription className="text-sm leading-7">Наш менеджер перезвонит вам в течение 15 минут, чтобы подтвердить запись.</DialogDescription><p className="text-[11px] text-muted-foreground">Демонстрационная запись. Данные не отправлены.</p><Button variant="garage" size="cta" onClick={() => setSuccess(false)}>Отлично <Check /></Button></DialogContent></Dialog>
    <Dialog open={policyOpen} onOpenChange={setPolicyOpen}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-lg rounded-lg"><DialogTitle>Политика конфиденциальности</DialogTitle><DialogDescription className="leading-7">Это демонстрационная страница автосервиса. Данные формы не передаются и не сохраняются. Перед запуском реальной записи необходимо добавить сведения об организации, условия обработки персональных данных и действующую политику конфиденциальности.</DialogDescription><Button variant="garage" onClick={() => setPolicyOpen(false)}>Понятно</Button></DialogContent></Dialog>
  </div>;
}
