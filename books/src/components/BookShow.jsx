import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
   const [showEdit, setShowEdit] = useState(false);

   const handleDeleteClick = () => {
      onDelete(book.id);
   };

   const handleEditClick = () => {
      setShowEdit(!showEdit);
   };

   const handleSubmit = (id, newTitle) => {
      setShowEdit(false);
      onEdit(id, newTitle);
   };

   let content = <h3>{book.title}</h3>
   if (showEdit) {
      content = <BookEdit onSubmit={handleSubmit} book={book} />;
   }

   return (
   <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      <div>{content}</div>
      <div className="actions">
         <button className="edit" onClick={handleEditClick}>
            Edit
         </button>
         <button className="delete" onClick={handleDeleteClick}>
            Delete
         </button>
      </div>
   </div>
   );
}

export default BookShow;  