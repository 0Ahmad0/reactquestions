import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./component/FormInput";
import QAList from "./component/QAList";
import { useState } from "react";
import { questions } from "./data"; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data,setData] = useState(questions);

  const AddItem=()=>{
    localStorage.setItem('items', JSON.stringify([...questions] ))
   setData([...questions]);
   notify('تمت إضافة البيانات بنجاح','Success')
  }

  const DeleteAll=()=>{
    localStorage.removeItem('items');
    questions.splice(0,questions.length);
    setData([])
   notify('تمت حذف البيانات بنجاح','Error')
  }

  const DeleteOneItem=(items)=>{
    localStorage.setItem('items', JSON.stringify([...items]))
    setData([...items]);
   notify('تمت حذف العنصر بنجاح','Error')
   if(items.length <=0){
    DeleteAll();
   }
  }


  const notify=(message,type)=>{
    if(type === "Error"){
      toast.error(message)
    }else if(type === "Success"){
      toast.success(message)
    }
  }


  return (
   <div className="font text-center color-body">
    <Container className="py-4">
      <Row>
        <Col sm="4">
        <div className="fs-4 text-center mb-4">أسئلة وأجوبة شائعة</div>
        </Col>

        <Col sm='8'>
          <FormInput onAdd={AddItem} notify={notify}/>
          <QAList data={data} deleteOneItem={DeleteOneItem}/>
          {
            localStorage.getItem('items') != null? (
        <Button className="btn-color my-2 w-100" onClick={DeleteAll}>مسح الكل</Button>

            ):<></>
          }
        </Col>
      </Row>
      <ToastContainer />
    </Container>
    </div>
  );
}

export default App;
