import Title2 from "../src/components/Title2";
import Text from "../src/components/Text";
import Form from "../src/components/Form";
function Contact() {
  return (
    <>
      <Title2>Contatti</Title2>
      <Text>Hai domande o vuoi saperne di più? Contattaci!</Text>        
      <Title2>Informazioni di contatto</Title2>
      <Text>Email: info@sito-meditazione.com</Text>
      <Text>Telefono: +39 123 456 7890</Text>
      <Text>Indirizzo: Via della Serenità, 123 - Città</Text>
      <div className="flex justify-center flex-col items-center">
      <Title2>Modulo di contatto</Title2>
      <Form></Form>
      </div>
    </>
    );
}
export default Contact;