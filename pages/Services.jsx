import Timer from "../src/components/Timer";
import Title2 from "../src/components/Title2";
import Text from "../src/components/Text";
function Services() {
  return( 
    <>
      <Title2>I nosti servizi</Title2>
      <Text>Scopri le nostre sessioni di meditazione e gli strumenti per coltivare la mindfulness.</Text>
      <Title2 className="">Meditazione guidata</Title2>
      <Text>Offriamo sessioni di meditazione guidata per principianti ed esperti.</Text>
      <div className="flex justify-center">
      <Timer></Timer>
      </div>
    </>
    )
}
export default Services;