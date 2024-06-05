import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

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

const Inputbox = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue); // This will log the updated value immediately
  };

  const handelCommentPost=(e)=>{
    e.preventDefault()
    const comment=e.target.value.comment;
    console.log(comment)
  }
  return (
    <div className="flex items-center">
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
            defaultValue={4.5}
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
      <form className="flex items-center gap-2" onSubmit={handelCommentPost}>
      <textarea
          className="textarea textarea-bordered h-24"
          placeholder="comment"
          name="comment"
          
        ></textarea>
        <button className="btn btn-outline">Commit</button>
      </form>
    </div>
  );
};

export default Inputbox;
