import React from 'react'
import './EditProduct.css';
function EditProduct() {
    return (
        <div className="container">
            <h2 className="pageTitle">Edit Product</h2>
            <form action="" className="edit-product-wrapper">
                <label htmlFor="firstName" className='inputlabel'>Title</label>
                <input type="text" id='firatName' className='inputfield' />
                <label htmlFor="description" className='inputlabel'>Description</label>
                <input type="text" id='description' className='inputfield' />
                <label htmlFor="category" className='inputlabel'>Shop By category</label>
                <select name="" id="category" className='optionfield'>
                    <option></option>
                    <option>Lorem ipsum dolor sit amet.</option>
                    <option>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, eligendi..</option>
                    <option>Lorem ipsum dolor sit amet.</option>
                </select>
                <div className="upload-file-box">
                    <label htmlFor="uploadImg" className='file-upload-label'>
                        <div className="uploadbtn">Upload</div>
                        <input type="file" name='Upload' id='uploadImg' className='file-upload-input' />
                    </label>
                </div>

                <div className="product-btn-list" style={{ marginTop: '20px',}}>
                    <button className='product-save-btn'>Save</button>
                    <button className='product-cancle-btn'>Cancle</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct