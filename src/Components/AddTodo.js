import { useState } from "react"

export const AddTodo = (props) => {

    const [title, setTitle]= useState("");
    const[desc, setDesc] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title|| !desc){
                alert("Title or Description can not be empty!")
        }
        else{   
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
}


  return (
    <div className='container my-3'>

<form onSubmit={submit}>
<div class="mb-3">
  <label for="title" class="form-label">Todo title</label>
  <input type="text" class="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}  id="exampleFormControlInput1" placeholder="E.g: Build a react app"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Todo Description</label>
  <textarea class="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)}  id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
<button type='submit' className='btn btn-success btn-sm'>Add Todo</button>
</form>
</div>


  )
}
