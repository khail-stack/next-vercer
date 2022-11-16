import React, { FC, PropsWithChildren } from 'react'

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (

        <div style={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '10px',
            color: 'black'
        }}>
            <h3>Dark-layout</h3>

            <div>
                {children}
            </div>

        </div>

    )
}
