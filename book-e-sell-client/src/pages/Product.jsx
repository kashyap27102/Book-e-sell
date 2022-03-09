import React from 'react'
import './Product.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Product() {
    return (
        <div className="container">
            <h2 className="pageTitle">Product page</h2>
            <div className="product-page-info-wrapper">
                <input type="text" placeholder='Serch...' className="product-page-searchbar" />
                <button className="add-product-btn">Add Product</button>
            </div>
            <div className="product-page-product-wrapper">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Data Source</th>
                            <th scope="col">Quary</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">12</th>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='btn-list'>
                                <EditIcon className='editbtn' />
                                <DeleteIcon className='deletebtn' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='btn-list'>
                                <EditIcon className='editbtn' />
                                <DeleteIcon className='deletebtn' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='btn-list'>
                                <EditIcon className='editbtn' />
                                <DeleteIcon className='deletebtn' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='btn-list'>
                                <EditIcon className='editbtn' />
                                <DeleteIcon className='deletebtn' />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="product-table-pagination">
                    <p style={{paddingRight:'10px'}}>Rows per page:</p>
                    <label style={{display:'none'}} htmlFor="selection">Selection</label>
                    <select id="selection" className='selectionBox'>
                        <option value="5">5</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <p class="pagination-wcaption" style={{paddingRight:'20px'}}><span>1</span>-<span>6</span> of <span>6</span></p>
                    <ul className="next-list-btn">
                        <li><ArrowBackIosIcon style={{color:'#949494',fontSize:'medium',cursor:'pointer'}}/></li>
                        <li><ArrowForwardIosIcon style={{fontSize:'medium',cursor:'pointer'}}/> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product