import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { questions } from "../data";

const FormInput=({onAdd,notify})=>{

    const[question,setQuestion]=useState('');
    const[answer,setAnswer]=useState('');

    const AddNewItem=()=>{
        if(question === "".trim() || answer === "".trim()){
            notify('من فضلك قم بتعبئة كامل البيانات',"Error")
        }else{
            questions.push({id:Math.random(),question:question,answer:answer});
        setQuestion('');
        setAnswer('');
        onAdd();
        }
    }

   
    return(
        <Row >
            <Col sm='4' className="pb-2">
            <Form.Control value={question} type="text" placeholder="أدخل السؤال" onChange={(e)=>{setQuestion(e.target.value)}}></Form.Control>
            </Col>


            <Col sm='4' className="pb-2">
            <Form.Control value={answer} type="text" placeholder="أدخل الاجابة" onChange={(e)=>{setAnswer(e.target.value)}}></Form.Control>            
            </Col>
            
            
          <Col sm='4'>
        <Button variant="primary" type="submit"
        className="btn-color mb-2 w-100"
        onClick={AddNewItem}
        >إضافة</Button>
            
           </Col>
        </Row>
    )
}

export default FormInput