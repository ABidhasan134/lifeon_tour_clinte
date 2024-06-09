import React, { useState, useEffect } from 'react';
import ManageRow from './manageRow';
import useAllUser from '../../../../hooks/useAllUser';
import useAxiousSequer from '../../../../hooks/useAxiousSequer';

const ManageUser = () => {
  const [allUser, refetch] = useAllUser();
  const axiosSequer = useAxiousSequer();
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setUser(allUser);
  }, [allUser]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setLoading(true);
    axiosSequer.get("/searchUsers", {
      params: { name: search },
    })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error searching users:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-1 mb-4">
        <input
          type="text"
          name="search"
          placeholder="Enter User name"
          className="input input-bordered w-full max-w-xs text-black"
        />
        <button className="btn bg-sky-300 hover:bg-sky-500 font-semibold">
          Search
        </button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <table className="table text-2xl">
          {/* head */}
          <thead className='text-2xl text-white'>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <ManageRow tour={item} index={index} key={item._id} refetch={refetch} />
            ))}
          </tbody>
        </table>
      )}
      
    </div>
  );
};

export default ManageUser;
