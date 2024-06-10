import React from 'react';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import useAxiousSequer from '../../../../hooks/useAxiousSequer';

const WishRowList = ({ wish, index,refetch }) => {
    const axiosSequer=useAxiousSequer()
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; 
    };

    const handelDelete=(id)=>{
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSequer.delete(`/wishlist/${id}`)
                .then((result)=>{
                    // console.log(result.data);
                    if(result.data.deletedCount){
                        refetch();
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                })         
            }
          });
    }

    return (
        <tr>
            <th>
                <label>
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={wish.image} alt="Wish Image" />
                    </div>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar"></div>
                    <div>
                        <div className="font-bold">{wish.title}</div>
                    </div>
                </div>
            </td>
            <td>{wish.guide_name}</td>
            <td>{formatDate(wish.trip_start_time)}</td>
            <th>{wish.price}</th>
            <th>
                <button onClick={()=>handelDelete(wish._id)} className='btn bg-black text-white hover:bg-red-500'>
                    <MdDelete className='text-2xl' />
                </button>
            </th>
            <th>
                <button
                    className="btn mt-4 ml-4 bg-sky-400 hover:bg-sky-700 hover:text-white"
                    onClick={() => document.getElementById(`modal_${index}`).showModal()}
                >
                    Details
                </button>
            </th>
            <dialog id={`modal_${index}`} className="modal">
                <div className="modal-box bg-gray-800 text-white">
                    <h3 className="font-bold text-lg">{wish.place_name}</h3>
                    <h1>{wish.title}</h1>
                    <h1>Trip date: {formatDate(wish.trip_start_time)}</h1>
                    <p>Guide name: {wish.guide_name}</p>
                    <p>Price: {wish.price}</p>
                    <hr className="border-1 border-gray-400 my-4 w-max-auto" />
                    {wish.image && <img src={wish.image} alt="Wish Image" />}
                    <hr className="border-1 border-gray-400 my-4 w-max-auto" />
                    <p className="py-4">{wish.short_description}</p>
                    <p className="py-4">{wish.long_description}</p>
                    <hr className="border-1 border-gray-400 my-4 w-max-auto" />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default WishRowList;
