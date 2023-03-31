import {FC} from 'react';

export const Header: FC = () => {
  return (
    <div className='header'>
        <div className='animate__animated animate__flipInX'>
            Todo App
        </div>

        <div 
            className='header-box-wave'
            style={{height: "100px", overflow: "hidden"}} 
        >
                <svg 
                    viewBox="0 0 500 150" 
                    preserveAspectRatio="none" 
                    style={{
                        height: "100%", 
                        width: "100%",
                    }}>
                        <path 
                            d="M-1.46,106.78 C212.41,162.88 272.23,158.95 501.92,100.88 L500.00,149.60 L-0.00,149.60 Z" 
                            style={{stroke: "none", fill: "#fff"}}>
                        </path>
                </svg>
        </div>
    </div>
  )
}
