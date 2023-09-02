import { Accordion, Button, Col, Row } from "react-bootstrap";
import NotFound from "./NotFound";
import { questions } from "../data";

const QAList = ({data,deleteOneItem}) => {
  const localData = JSON.parse(localStorage.getItem('items'));

  const onDeleteItem=(id)=>{
    if(localStorage.getItem('items') != null){
      const index = questions.findIndex((item)=> item.id === id);
      questions.splice(index,1);
      deleteOneItem(questions);
    }else{

    }
    
  }
  return (
   <Row className="justify-content-center"> 
    <Accordion>
     {
      localStorage.getItem('items') != null ? (
       localData.map((item,index)=>{
        return(
          <Accordion.Item key={index} eventKey={item.id} className="mb-2">
          <Accordion.Header>{item.question}</Accordion.Header>
        <Accordion.Body className="text-end ">
              <div className="d-inline">{item.answer}</div>
          <Button className="btn-color mx-2" onClick={()=>onDeleteItem(item.id)}>مسح الاجابة</Button>
        </Accordion.Body>
        </Accordion.Item>
        )
       })
      ):(<NotFound/>)
     }
    </Accordion>
    

    
   
   </Row>
  );
};

export default QAList;
