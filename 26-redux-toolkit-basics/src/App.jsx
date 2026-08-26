import { useSelector, useDispatch } from 'react-redux';
import { addbook, emptyBooks as emptySocialBooks } from './Store/Slices/SocialSlice';
import { addBook, emptyBooks as emptyPhysicsBooks, incrementEnrolledStudents } from './Store/Slices/PhysicsSlice';

function App() {
  let books = useSelector(state => state.Social.books);
  let physicsBooks = useSelector(state => state.Physics.books);
  let studentsCount = useSelector(state => state.Physics.enrolledStudentsCount);

  const dispatch = useDispatch();

  function addBookToSlice() {
    dispatch(addbook("Social Book 3"));
  }

  function emptyAllBooks() {
    dispatch(emptySocialBooks());
    dispatch(emptyPhysicsBooks());
  }

  function printCurrentBooks() {
    console.log("Current books:", books);
  }

  function printPhysicsStats() {
    console.log("Physics Books:", physicsBooks);
    console.log("Enrolled Students Count:", studentsCount);
  }

  return (
    <>
      <button onClick={addBookToSlice}>Add Book</button>
      <button onClick={printCurrentBooks}>Get Book</button>
      <button onClick={emptyAllBooks}>Empty All Book</button>
      <button onClick={printPhysicsStats}>Print Physics Stats</button>
    </>
  );
}

export default App;