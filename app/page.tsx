//homepage
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";



export default function Home() {
  return (

    <>
    <div className="bg-accentBorderInverseSecondary full-hero">

      <Section1 />
      <Section2 />
      <Section3 />

      <hr className="border-t border-strokeDivider my-0 pb-lg" />
    </div>
    </>

  );
}
