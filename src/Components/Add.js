import React from "react";


function Add(){
    return(
        <div>
            
            <br /><br />
            <div className="containerSM">
                <h1 style={{fontSize:"28px",marginLeft:"35%"}}><i>Create New</i></h1>
            </div>
            <br />
            <div className="form">
                <form className="row g-3">
                <div className="col-10">
                    <label for="inputTopic" className="form-label1">Topic</label>
                    <input type="text" className="form-control" id="topic" value={topic} />
                    <div className="err">
                        {errors.topic && <p className="error-message">{errors.topic}</p>}
                    </div>
                </div>
                <div className="col-10">
                    <label for="inputDescription" className="form-label1">Description</label>
                    <input type="text" className="form-control" id="description" value={description} onChange={(e)=>{setDescription(e.target.value);}}/>
                    <div className="err">
                        {errors.description && <p className="error-message">{errors.description}</p>}
                    </div>    
                </div>
                <div className="col-md-5" style={{marginLeft:"4%"}}>
                    <label for="inputQuantity" className="form-label1">Quantity</label>
                    <input type="text" className="form-control" id="quantity" value={quantity}/>
                </div>
                <div className="col-md-5">
                    <label for="inputNumber" className="form-label1">Number</label>
                    <input type="text" className="form-control" id="number" value={number} />
                    <div className="err">
                    </div>
                </div>
                <div className="col-6">
                    <br /> 
                    <button type="submit"  className="btn btn-primary1">Post</button>
                </div>
                </form>
                <br />
            </div>
            <br /><br />
            <br /><br />

        </div>
    )
}
export default Add;