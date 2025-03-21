import Title2 from "../src/components/Title2";
import Text from "../src/components/Text";
import Anchor from "../src/components/Anchor";
import UlHome1 from "../src/components/UlHome1";
import ImgHome1 from "../src/components/imgHome1";
function Home() {
  return (
    <>  
      <Title2 className="text-azzurro">Trova la tua calma interiore</Title2>
      <Text>Sessioni guidate, corsi e risorse per coltivare la mindfulness nella tua vita quotidiana.</Text>
      <Anchor to="/Services">Scopri i nostri servizi</Anchor>
      <Title2>Perché meditare?</Title2>
      <div className="flex">     
      <Text>La meditazione è un viaggio verso la serenità interiore, un modo per calmare la mente e connettersi con se stessi. È una pratica antica che ha dimostrato di avere numerosi benefici per la salute fisica e mentale.</Text>
      <ImgHome1></ImgHome1>
      </div>
      <Title2>Benefici della meditazione:</Title2>
      <UlHome1></UlHome1>
      <Anchor to="/Contact">Prenota ora</Anchor>
    </>
    );
}
export default Home;