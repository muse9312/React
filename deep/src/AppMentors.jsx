import useState from 'react'

const AppMentors = () => {
    // 리액트에서 사용하는 state는 불변성을 유지해야한다!!
    const [person, setPerson] = useState({
        name: '엘리',
        title: '개발자',
        mentors: [
            {
                id: 1,
                name: '밥',
                title: '시니어개발자',
            },
            {
                id: 2,
                name: '제임스',
                title: '시니어개발자',
            },
        ],
    });
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, id) => (
                    <li key={id}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button
                onClick={() => {
                    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
                    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

                    setPerson(person => ({
                        ...person, mentors: person.mentors.map((mentor) => {
                            if (mentor.name === prev) {
                                return { ...mentor, name: current }

                            }
                            return mentor;
                        })
                    }))
                }}
            >
                멘토의 이름을 바꾸기
            </button>
        </div>
    );
}

export default AppMentors