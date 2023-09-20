import React from 'react'
import ReactDOM from 'react-dom/client'
// import AppPointer from './AppPointer'
import AppMentor from './AppMentor'
// import AppMentors from './AppMentors'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppPointer /> // 좌표 */}
    < AppMentor />

    {/* < AppMentors /> 멘토 이름 변경 심화(베열) */}
  </React.StrictMode>,
)
