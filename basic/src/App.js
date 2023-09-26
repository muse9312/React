
import './App.css';
import Profile from './components/Profile';

function App() {

  const dummyData = [
    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1",
      "name": "떼온",
      "title": "프론트엔드 개발자",
      "isCkeched": "fales"
    },
    {
      "id": 2,
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1",
      "name": "세원",
      "title": "백엔드 개발자",
      "isChecked": "true"
    },
    {
      "id": 3,
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1",
      "name": "who",
      "title": "데브옵스 개발자",
      "isChecked": "true"
    }
  ]

  return (
    <>
      {dummyData.map(user => {
        return (
          <Profile key={user.id} img={user.img} name={user.name} title={user.title} isChecked={user.isChecked} />
        )
      })}
    </>
  );
}

export default App;
