import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { AuthContext } from "../../../../../../context/authProvider";
import useAxiousSequer from "../../../../../../hooks/useAxiousSequer";
import Swal from 'sweetalert2'

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const RettingComment = ({guide}) => {
  const [value, setValue] = React.useState(guide.average_rating);
  const [hover, setHover] = React.useState(-1);
  const {user}=React.useContext(AuthContext)
  const axiosSequer=useAxiousSequer();
 
  // console.log(guide)
  const handleRatingChange = (event, newValue) => {
    const tourist_name=user.displayName;
    const tourist_email=user.email;
    const guide_email=guide.email;
    const guide_name=guide.name;
    setValue(newValue);
    const info={tourist_email,tourist_name,newValue,guide_name,guide_email};
    // console.log(info); // This will log the updated value immediately
    axiosSequer.put(`/rattingComment/${tourist_email}`,info)
    .then((res)=>{
      console.log(res.data); 
      if(res.data.upsertedCount>0 || res.data.modifiedCount>0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `you rate ${guide.name} `,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  
  };

  const handelCommentPost=(e)=>{
    const tourist_name=user.displayName;
    const tourist_email=user.email;
    const guide_email=guide.email;
    const guide_name=guide.name;
    e.preventDefault();
    const comment = e.target.comment.value;
    const info={tourist_email,tourist_name,comment,guide_name,guide_email}
    // console.log(info);
    axiosSequer.put(`/rattingComment/${tourist_email}`,info)
    .then((res)=>{
      console.log(res.data); 
      if(res.data.upsertedCount>0 || res.data.modifiedCount>0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `you rate ${guide.name} `,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div >
      <p className='text-xl font-semibold '> <span>Give me ratting and Comment:</span></p>
        <div className="md:flex items-center grid">
        <Box
          sx={{
            width: 400,
            display: "flex",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={handleRatingChange}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
        
      <form className="flex items-center md:gap-2" onSubmit={handelCommentPost}>
      <input
              type="text"
              name="comment"
              placeholder="comment"
              className=" mt-2 ml-1 input input-bordered input-accent w-full"
              required
            />
        <button className="btn btn-outline">Commit</button>
      </form>
        </div>
    </div>
  );
};

export default RettingComment;
