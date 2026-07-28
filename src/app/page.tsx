import { Hero } from "@/components/Hero";
import { Contexto } from "@/components/Contexto";
import { MedidasInmediatas } from "@/components/MedidasInmediatas";
import { EjeTributario } from "@/components/EjeTributario";
import { EjePermisos } from "@/components/EjePermisos";
import { EjeGasto } from "@/components/EjeGasto";
import { ResumenCritico } from "@/components/ResumenCritico";
import { InformeFinanciero } from "@/components/InformeFinanciero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Contexto />
        <MedidasInmediatas />
        <EjeTributario />
        <EjePermisos />
        <EjeGasto />
        <ResumenCritico />
        <InformeFinanciero />
      </main>
      <Footer />
    </>
  );
}
