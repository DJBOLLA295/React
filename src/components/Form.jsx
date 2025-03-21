import Label from "./Label"
import  Button from "./Button"
import Input from "./Input";
import TextArea from "./TextArea";

function Form () {
    return (
        <form className="flex flex-col bg-blu items-center
        w-[250px] h-auto m-[10px] rounded-[8px]
        xs:w-[300px] xs:h-[300px] xs:m-[10px] xs:rounded-[10px]
        sm:w-[400px] sm:h-[400px] sm:m-[15px] sm:rounded-[12px]
        md:w-[500px] md:h-[500px] md:m-[20px] md:rounded-[14px]
        lg:w-[600px] lg:h-[600px] lg:m-[25px] lg:rounded-[16px]
        xl:w-[700px] xl:h-[700px] xl:m-[30px] xl:rounded-[18px]
        2xl:w-[800px] 2xl:h-[800px] 2xl:m-[35px] 2xl:rounded-[20px]
        3xl:w-[900px] 3xl:h-[900px] 3xl:m-[40px] 3xl:rounded-[22px]
        ">
            <div className="flex flex-col items-center">
            <Label>Nome</Label>
            <Input></Input>
            </div>
            <div className="flex flex-col items-center">
            <Label>Email</Label>
            <Input></Input>
            </div>
            <div className="flex flex-col items-center">
            <Label>Messaggio</Label>
            <TextArea></TextArea>
            </div>
            <Button className="bg-verde">Invia</Button>
        </form>
    )
}

export default Form;