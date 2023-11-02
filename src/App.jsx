import { useState } from 'react';
import './App.css';

function App() {
  const [lists, setLists] = useState([
    {id:1, content: 'react를 배워봅시다.'},
  ]);

  const [content, setContent] = useState('');

  // 입력 받은 내용으로 상태변경
  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

  // 새 리스트 추가
  const addListHandler = () => {
    const newList = {
      id: lists.length +1,
      content: content,
    };
    setLists([...lists, newList]);
    setContent('');
  };

  return (
    <div className="App">
      <input 
      value={content}
      onChange={(e) => contentChangeHandler(e)} />
      <button onClick={addListHandler}>추가하기</button>
      <h1>Todo List</h1>
      <div className='box'>
        {lists.map((item)=> {
          return <div className='boxStyle' key={item.id}>{item.content}</div>
        })}
      </div>
    </div>
  );
}

export default App;
