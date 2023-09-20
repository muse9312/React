import { useState } from 'react'

const AppMentor = () => {
    const [person, setPerson] = useState({
        name: 'sewon',
        title: '개발자',
        mentor: {
            name: 'James',
            title: '시니어개발자',
        },
    });

    function modifyName(e) {
        console.log(e);
        const name = prompt(`what's your mentor's name?`);
        setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name }
        }))
    }

    function modifyTitle() {
        const name = prompt(`what's your mentor's name?`);
        setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name }
        }))
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button
                onClick={modifyName}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={modifyTitle}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}

export default AppMentor