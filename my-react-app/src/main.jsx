import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // React 개발 모드에서만 동작하는 래퍼 컴포넌트 
// 1. 잠재적 문제 탐지
// 2. 개발자에게 경고하기위한 일부 함수 두 번 실행
// 3.  오래된 API 사용 탐지

  <StrictMode>
    <App />
  </StrictMode>,
)
