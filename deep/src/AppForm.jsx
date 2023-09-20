import useState from 'react'

const AppForm = () => {
    const [form, setFrom] = useState({ name: '', email: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFrom({ ...form, [name]: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름:</label>
            <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor='email'>이메일:</label>
            <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}

export default AppForm